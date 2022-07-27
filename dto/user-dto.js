class UserDTO {
id;
pseudo;
email;
firstname;
lastname;


constructor(id, pseudo, email, firstname, lastname){
    this.id = id;
    this.pseudo = pseudo;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
}


}

module.exports = UserDTO;