<template>
    <div>
        <div class="list-container">
            <div class="check-listItem">
                <input type="checkbox" class="checkBox" :v-model="checkModel">
                <p class="listItem" > {{listItem}}</p>
            </div>
            <div class="container-btn">
                <button class="update-btn" @click="updateTask(id, task)">Modifier</button>
                <button class="delete-btn" @click="deleteTask(id)">Supprimer</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name :'ListItem',
props:["listItem","checkModel", "deleteTask", "id", "updateTask","newT" ,"task"]
}
</script>

<style>
.counter-container{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.done-task{
    margin-right: 3em;
}
.update-btn{
    background-color:#8EC5FC ;
    color: white;
        height: 25px;
    width: 100px;
    size: 22px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #8EC5FC;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.update-btn:hover{
    font-weight: bold;
    background-color:white ;
    color: black;
    size: 22px;
    border: 2px solid #3880c9;
    border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.delete-btn{
    background-color:#f85555 ;
    height: 25px;
    width: 100px;
    color: white;
    size: 22px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #f85555;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 1em;
}
.delete-btn:hover{
    background-color:white ;
    color: black;
    size: 22px;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #f85555;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.listItem{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    size: 52px;
    font-weight: bold;
    color: rgb(49, 49, 49);
}
.list-container{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.container-btn{
    margin-left: 1em;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.checkBox{
    margin-top: 14px;
    margin-right: 1.5em;
    height: 25px;
    width: 25px;
    background-color: #eee;
}
.check-listItem{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
</style>