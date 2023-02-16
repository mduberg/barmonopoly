<script>
import { doc, updateDoc, getDoc, collection, getDocs, query, where, onSnapshot} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { db } from '@/firebase'
import { LogLevel } from "@firebase/logger";




export default{
    name: 'GameLoungeView',
    props: {
        gameId: String,
    },
    data() {
        return {
            gameName: '',
            creator: '',
            createdByThisUser: false,
            team1: [],
            team2: [],
            hostView: false,
            showSpinner: false,
            showLoading: false,
            loadNum: "0",
        }
    },
    methods: {
        async startGame(){
            //set this game to active = true
            let date = new Date()
            date.setHours(date.getHours() + 3);
            const gameRef = doc(db, "games", this.gameId);
            await updateDoc(gameRef, {
                active: true,
                endDate: date.toString()
            });

            this.startLoading()
            setTimeout(() => {
                this.$router.push('/game/'+this.gameId)
            }, 2400);
        },

        startLoading(){
            this.showLoading = true
            
            //TODO set game to Active
            setTimeout(() => {
                document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',"10");
                document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number("10")+'%');  
            }, 800);
            setTimeout(() => {
                document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',"39");
                document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number("39")+'%');  
            }, 1100);
            setTimeout(() => {
                document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',"65");
                document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number("65")+'%');  
            }, 1700);
            setTimeout(() => {
                document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',"100");
                document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number("100")+'%');  
            }, 2200);

            setTimeout(() => {
                document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',"100");
                document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number("100")+'%');  
            }, 2400);

        },
        async assignToTeams(toBeAssigned){
            console.log("nu körs to be assigned med", toBeAssigned);
            toBeAssigned.sort(() => Math.random() - 0.5);
            while (toBeAssigned.length >0){
                let poppedUser = toBeAssigned.pop()
                console.log(poppedUser);
                if (this.team2.length >= this.team1.length){
                    if (!this.team1.includes(poppedUser.data().username)) {
                        this.team1.push(poppedUser.data().username)
                    }
                    var team = "1"
                } else {
                    if (!this.team2.includes(poppedUser.data().username)) {
                        this.team2.push(poppedUser.data().username)
                    }                    
                    var team = "2"
                }
                const userRef = doc(db, "users", poppedUser.id);
                    await updateDoc(userRef, {
                    team: team
                    });
            }
        }
    },
    async mounted(){
        let currentUser = getAuth().currentUser.displayName
        console.log('inloggad är',currentUser);
        

        this.showSpinner = true
        const docRef = doc(db, "games", this.gameId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.creator = docSnap.data().creator
            this.gameName = docSnap.data().name
            console.log("är detta samma?",currentUser, this.creator);

            if (currentUser == this.creator) {
                this.hostView = true
            }
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

        // look for realtime updates in users belonging to this game, but unassigned to team
        const q = query(collection(db, "users"), where("inGame", "==", this.gameId));
        const snapshotQuery = onSnapshot(q, (querySnapshot) => {
            var toBeAssigned = []
            querySnapshot.forEach((doc) => {
                if ((!this.team1.includes(doc.data().username)) && (!this.team2.includes(doc.data().username))) {
                    if (doc.data().team == "1"){
                    this.team1.push(doc.data().username)
                    }
                    else if (doc.data().team == "2"){
                        this.team2.push(doc.data().username)
                    }
                    if ((doc.data().team != "1") && (doc.data().team != "2")) {
                        toBeAssigned.push(doc);
                    }
                }
                
            })
            this.showSpinner = false
            this.assignToTeams(toBeAssigned)
        })

        // look for realtime updates in the game document's active attribute
        if (!this.hostView) {
            const activeCheck = onSnapshot(
            doc(db, "games", this.gameId), 
            { includeMetadataChanges: true }, 
            (doc) => {
                if (doc.data().active == true) {
                    console.log("active är sann");
                    this.startLoading()
                    setTimeout(() => {
                        this.$router.push('/game/'+this.gameId)
                    }, 2400);


                }
            });
        }


    }
}

</script>

<template>
    <div v-if="!showLoading" style="text-align: center;">
        <div class="headerBox">
            <h1 style>{{this.gameName}}</h1>
        </div>
        <h4 v-if="this.hostView" style="margin: 0 auto; font-size: 14px;">Vänta in spelarna och starta sedan spelet</h4>
        <h4 v-else style="margin: 0 auto; font-size: 14px;">Väntar på att spelledaren ska starta spelet...</h4>

        <div class="rowContent">
            <div v-if="this.showSpinner" id="spinner" class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="listContent">
                <div class="teamTitle" style="background-color: rgb(200, 30, 30);" >STRYKJÄRNEN</div>
                <ul v-for="member in this.team1" class="list-group">
                <li id="listElement" class="list-group-item"><div class="textCenter">{{member}}</div></li>
                </ul>
            </div>

            <div class="listContent">
                <div class="teamTitle" style="background-color: rgb(30, 30, 200);">FINGERBORGARNA</div>
                <ul v-for="member in this.team2" class="list-group">
                <li id="listElement" class="list-group-item">{{member}}</li>
                </ul>
            </div>
        </div>
        <vue-slider
            ref="slider"
            v-model="this.value"
            v-bind="this.options"
        ></vue-slider>
        <button v-if="this.hostView" @click="this.startGame()" style="width: 150px; margin: 0 auto;" type="button" class="btn btn-success">Starta spelet</button>
    
    
    </div>
    
    <div v-if="showLoading" style="text-align: center;">
        <img id="loadingIcon" style="width:90px; margin-top:80px;" src="../assets/loadingIcon.png">
        <h4 style="margin-top:50px; font-size: 14px;">Spelet startas...</h4>
    <div class="progress" style="width: 400px; margin: 30px auto;">
        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    </div>



        
    


</template>

<style scoped>
#loadingIcon{
    animation: rotation 1s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


#spinner{
    position: absolute;
    left: calc(50% - 16px);
    top: 80px;
    z-index: 2;
}

.teamTitle{
    width: 100%;
    text-align: center;
    height: 60px;
    border-radius: 7px;
    padding-top: 17px;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    border: 2px;
    border-style: solid;
    border-color: white;
    margin-bottom: 20px;    
}


#listElement{
    width: calc((100% / 2));
    min-width: 156px;
    margin: auto;
    text-align: center;
    background-color: rgb(247, 247, 247);

}

.rowContent{
    position: relative;
    margin: 15px auto;
    width: calc(100vw - 80px);
    max-width: 500px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.listContent{
    width: calc((100% / 2));
    min-width: 156px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.headerBox{
    min-width: 200px;
    height: 80px;
    margin: 30px auto;

}

h1{
    color: rgb(0, 0, 0);
    text-align: center;
    margin: 12px auto;
    
    
}
</style>