<template>
  <div>
    <h2>Employee List</h2>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        <span>{{ employee.name }}</span>
        <span>{{ employee.email }}</span>
        <span>{{ employee.employeeId }}</span>
        <button @click="editEmployee(employee)">Edit</button>
        <button @click="deleteEmployee(employee.id)">Delete</button>
      </li>
    </ul>

    <router-link to="/create">Create New Employee</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await fetch("http://localhost:3000/employees");
        const data = await response.json();
        this.employees = data;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    editEmployee(employee) {
      this.$router.push({ name: "edit-employee", params: { id: employee.id } });
    },
    async deleteEmployee(id) {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          this.fetchEmployees();
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    },
  },
};
</script>
<style scoped>
li span{
    margin: 2%;
}
li button{
    margin: 1%;
}
</style>
