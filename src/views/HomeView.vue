<script>
export default {
  name: 'HomeView',
  methods: {
    navigateTo(link){
      this.$router.push('/'+link)
    }
  }
}
</script>


<template>
 <div class="buttonRow">
  <button @click="navigateTo('creategame')" type="button" id="buttonStyle" class="btn btn-primary btn-lg"><span style="font-size: 80px;" class="material-symbols-outlined">
edit_square
</span><div style="margin-top: 20px;">Skapa spel</div></button>
  <button @click="navigateTo('joingame')" type="button" id="buttonStyle2" class="btn btn-primary btn-lg"><span style="font-size: 90px;" class="material-symbols-outlined">
group
</span><div style="margin-top: 9px;">Joina spel</div></button>


</div>
</template>
<style scoped>

@media (max-width: 480px) {
  .buttonRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 35px;
    
    align-items: center;
    margin-top: 45px;
  }


  #buttonStyle {
  border-radius: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 140px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}

#buttonStyle2 {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 140px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  background-color: rgb(207,46,38);

}
#buttonStyle2:hover{
  background-color: rgb(183, 44, 37);
}


}
@media (min-width: 481px) {
  .buttonRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    
    align-items: center;
    margin-top: 45px;
  }

  #buttonStyle {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}

#buttonStyle2 {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  background-color: rgb(207,46,38);
}
#buttonStyle2:hover{
  background-color: rgb(183, 44, 37);
}


}



</style>


