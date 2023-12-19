function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            }.bind(this));
        }
    }
    skills.showSkills();
}