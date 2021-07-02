<template>
  <div id="app">
    <h1 id="title-app">TodoList</h1>
      <div class="counter-container">
          <p class="done-task">Taches en cour(s) : {{todoTask}}</p>
          <p>Taches effectué(s): {{todoDone}}</p>
      </div>
    <div v-for=" task in taskList " :key="task.id">
      <list-item  :listItem="task.task" :deleteTask="deleteTask" :id="task.id"  :updateTask="openModalU" :task="task.task"  ></list-item>
    </div>
    <div>
      <button class="btn-add"  @click="openModal()">+</button>
    </div>
      <modal name="task_modal" :width="300" :height="200" :adaptive="true">
        <div class="add-container">
          <p>Ajout d'une tâche </p>
          <input class="input-task" v-model="newTask">
          <button class="btn-add-modal" @click="addTask(newTask)">Ajout de la tâche</button>
        </div>
      </modal>
        <modal name="update_modal" :width="300" :height="200" :adaptive="true">
        <div class="add-container">
          <p>Ajout d'une tâche </p>
          <input class="input-task" :value="selectedTask" v-on:input="selectedTask = $event.target.value">
          <button class="btn-add-modal" @click="updateTask( {id: selectID, task:selectedTask})">Modifier la tâche</button>
        </div>
      </modal>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ListItem from './components/ListItem.vue'
export default {
  name: 'App',
  components: {
   ListItem
  },
  data(){
    return{
      newTask:null,
      selectID : null,
      selectedTask: null
    }
  },
  computed:{
      ...mapState(["taskList","todoTask","todoDone"])
  },
  methods:{
    openModalU(id, task){
      this.$modal.show('update_modal')
      this.selectID = id;
      this.selectedTask = task;
    },
    openModal(){
      this.$modal.show('task_modal')
    },
    ...mapActions(["addTask","deleteTask","updateTask"]),
    test(event){
      event.target.value
    }
  },
  mounted(){
    
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #8EC5FC;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}
#title-app{
  padding-top: 50px;
}
.btn-add{
  margin-top: 2em;
  size: 150px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  color: white;
  background-color: #4387cc;
  border-radius: 2px solid #4387cc;
  border-radius: 100px;
}
.btn-add:hover{
  size: 78px;
  font-weight: bold;
  color: #4387cc;
  background-color: white;
  border-radius: 2px solid #4387cc;
  border-radius: 100px;
}
.btn-add-modal{
    margin-top: 2em;
  size: 150px;
  width: 150px;
  height: 50px;
  font-weight: bold;
  align-self: center;
  color: white;
  background-color: #4387cc;
  border-radius: 2px solid #4387cc;
  border-radius: 5px;
}
.btn-add-modal:hover{
    margin-top: 2em;
  size: 150px;
  font-weight: bold;
  color: #4387cc;
  background-color: white;
  border-radius: 2px solid #4387cc;
}
.input-task{
  width: 200px;
  align-self: center;
}
.add-container{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
