import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoTask: 0,
    todoDone: 0,
    taskList:[
      {
        id: 1,
        task: "Faire mon tp PHP"
      },
      {
        id: 2,
        task: "Faire la vaiselle"
      }
    ]
  },
  mutations: {
    ADD_TASK(state, newTask){
      const index = state.taskList.length +1
      state.taskList.push({
        id: index,
        task: newTask
      })
    },
    DELETE_TASK(state, idTask){
      for(let i=0; i < state.taskList.length; i++){
        if(state.taskList[i].id === idTask){
          state.taskList.splice(i, 1)
        }
      }
    },
    UPDATE_TASK(state, {id, task}){
      console.log("Id: ", id);
      console.log("Task:", task);
      for(let i=0; i < state.taskList.length; i++){
        if(state.taskList[i].id === id){
          state.taskList.splice(i, 1)
          state.taskList.push({
            id: id,
            task: task
          });
        }
      }
    }
  },
  actions: {
    addTask(context, task){
      context.commit('ADD_TASK', task)
    },
    deleteTask(context, id){
      context.commit('DELETE_TASK', id)
    },
    updateTask(context, {id, task}){
      console.log("Id: ", id);
      console.log("Task:", task);
      context.commit('UPDATE_TASK', {id , task})
    }
  },
  modules: {
  }
})
