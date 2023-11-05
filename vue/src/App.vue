 <template>
  <div id="app">
    <header>
      <h1>Employee Management System</h1>
    
    </header> 
    <div class="s">
      <router-link class="st" to="/employees">Employee List</router-link>
      <router-link class="st" to="/create">Create Employee</router-link>
      </div> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #42b983;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-around;
}

h1 {
  margin: 0;
}

router-link {
  color: white;
  text-decoration: none;
  margin:10%;
}
.st 
{
   margin-right: 20px;
}
.s{
  background-color: darksalmon;
  overflow: hidden;
  padding: 2%;
  float: left;
  width: 100%;
}
router-link.active {
  font-weight: bold;
}
</style>
