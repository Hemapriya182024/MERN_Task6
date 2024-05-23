class Person{
    constructor(fullname,age,place,address,emailid,qualification,fathername,mothername){
        this.fullname=fullname;
        this.age=age;
        this.place=place;
        this.address=address;
        this.emailid=emailid;
        this.qualification=qualification;
        this.fathername=fathername;
        this.mothername=mothername;
    
    }
}
const PersonDetails=new Person("Hemapriya",22,"villupuram","123 asai nagar ","hema@gmail.com","postgraduate","karthikeyan","kalaichelvi")
console.log(PersonDetails)