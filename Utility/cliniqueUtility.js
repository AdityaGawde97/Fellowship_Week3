const utility = require('../Utility/oopsUtility')

class Clinique {
    constructor() {
        let content = utility.readFromFile('../JSON/cliniqueData.json')  // reading json data from file
        this.details = JSON.parse(content);     // storing json object
    }
}

class cliniqueManagement extends Clinique {

    /**
     * @description : adding doctor information in json
     */
    addDoctor() {
        console.log('\nAdd Doctor : ');
        
        var dr_Name = utility.readLine().question("\nEnter name of the doctor : ");
        var dr_Id = utility.readLine().questionInt("Enter doctor's id : ");
        var speciality = utility.readLine().question("Enter doctor's speciality : ");
        var availability = utility.readLine().question("Enter availability time of doctor as AM, PM or Both : ");
        if(!isNaN(dr_Name) && !isNaN(speciality) && !isNaN(availability))
        {
            console.log('\nEnter Valid Input, Please Try Again\n ');
            return;
        }

        this.details.doctor.push({
            dr_Name : dr_Name,
            dr_Id : dr_Id,
            speciality: speciality,
            availability : availability,
            NoOfAppointment : 0
        })

        utility.writeIntoFile('../JSON/cliniqueData.json', JSON.stringify(this.details));

    }

    /**
     * @description : adding patient data into the json
     */
    addPatient(){
        console.log('\nAdd Patient : ');

        var patientName = utility.readLine().question("\nEnter name of the patient : ");
        var mobileNumber = utility.readLine().questionInt("Enter patient's mobile number : ");
        var age = utility.readLine().questionInt("Enter patient's age : ");
        var p_Id = this.details.patient[this.details.patient.length-1].p_Id++;
        if(!isNaN(patientName) && mobileNumber.toString.length != 10)
        {
            console.log('\nEnter Valid Input, Please Try Again\n ');
            return false;
        }

        this.details.patient.push({
            patientName : patientName,
            p_Id : p_Id,
            mobileNumber : mobileNumber,
            age : age
        })
        utility.writeIntoFile('../JSON/cliniqueData.json', JSON.stringify(this.details));
        return patientName
    }

    /**
     * @description : booking patient appointment with doctor
     */
    takeAppointment() {

        var status = utility.readLine().question('\nIs Patient already added to the Database ( y or n) : ')

        if(status == 'y' || status == 'Y'){
            var patientName = utility.readLine().question('\nEnter the Patient Name : ')
        }
        else{
            var patientName =  this.addPatient();
            if (patientName == false) {
                return
            }
        }

        console.log('\nBooking Appointment : ');

        do{
            var look = utility.readLine().question('\nDo you want to take a look at Doctors Data (y or n) : ');
            if(look == 'y' || look == 'Y' )
                this.searchDoctor();
            else
                break;
        }while(look == 'N' | look == 'n' );
        
        var dr_Name = utility.readLine().question("\nEnter doctor's name : ");

        var time = utility.readLine().question("Enter appointment time as AM, PM or Both : ");
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        let index = -1
        for (let key in this.details.doctor) {
            if (this.details.doctor[key].dr_Name == dr_Name) {
                index = key;             
            }
        }
        if (index != -1) {
            if (this.details.doctor[index].NoOfAppointment < 5) {
                if (this.details.doctor[index].availability == time) {
                    this.details.cliniqueAppointment.push({
                        dr_Name : dr_Name,
                        patientName : patientName,
                        date : date,
                        time : time
                    })
                    this.details.doctor[index].NoOfAppointment++;
                    console.log(`\nThe patient ${patientName} Appointment is booked with Dr. ${dr_Name} on ${date} at ${time}.`)
                }
                else {
                    console.log("\nDoctor isn't available in this time")
                }
            }
            else {
                console.log("\nDoctor's appointments are full");
                var answer = utility.readLine().question('\nDo you want Appointment on next date (y | n) : ')
                if(answer == 'Y' || answer == 'y'){
                    if (this.details.doctor[index].availability == time) {
                        var date = today.getDate()+1+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                        this.details.cliniqueAppointment.push({
                            dr_Name : dr_Name,
                            patientName : patientName,
                            date : date,
                            time : time
                        })
                        this.details.doctor[index].NoOfAppointment++;
                        console.log(`\nThe patient ${patientName} Appointment is booked with Dr. ${dr_Name} on ${date} at ${time}.`)
                    }
                    else {
                        console.log("\nDoctor isn't available in this time")
                    }

                }
            }
        }
        else {
            console.log("\nDoctor not found")
        }
        utility.writeIntoFile('../JSON/cliniqueData.json', JSON.stringify(this.details));
    }

    /**
     * @description : checking booked appointment
     */
    checkAppoinment(){
        var patientName = utility.readLine().question('\nEnter the patient name : ');
        let index = -1;
        for (let key in this.details.cliniqueAppointment) {
            if (this.details.cliniqueAppointment[key].patientName == patientName) {
                index = key;
            }
        }
        if (index == -1) {
            console.log('The Patients Appointment Not Booked. ');
            return;
        }
        else{

            console.log(`\nPatient Name : ${this.details.cliniqueAppointment[index].patientName}`);
            console.log(`Doctor Name : ${this.details.cliniqueAppointment[index].dr_Name}`);
            console.log(`Date : ${this.details.cliniqueAppointment[index].date}`);
            console.log(`Time : ${this.details.cliniqueAppointment[index].time}`);
        }

        do{

            var cancel = utility.readLine().question('\nDo you Want to cancel the Appointment (y or n): ');
            if(cancel == 'Y' || cancel == 'y'){
                
                let dr_Name = this.details.cliniqueAppointment[index].dr_Name;

                let index2 = -1;
                for (let key in this.details.doctor) {
                    if (this.details.doctor[key].dr_Name == dr_Name) {
                        index2 = key;
                    }
                }
                this.details.doctor[index2].NoOfAppointment--;
                this.details.cliniqueAppointment.splice(index,1);
            }
            else
                break;

            
        }while (cancel == 'N' || cancel == 'n');
        utility.writeIntoFile('../JSON/cliniqueData.json', JSON.stringify(this.details));

    }

    /**
     * @description : serching doctor by name, id, speciality, etc 
     */
    searchDoctor() {

        console.log('\nSearch Doctor : ');

        console.log("\n\t1) Search by name\n\t2) Search by Id\n\t3) Search by speciality\n\t4) Search by availability\n");
        let choice = utility.readLine().questionInt("\nEnter your choice : ");

        switch (choice) {

            case 1 :
                var dr_Name = utility.readLine().question("\nEnter name of the doctor : ");
                for (let i in this.details.doctor) {
                    if (this.details.doctor[i].dr_Name == dr_Name) {
                        //console.log(this.details.doctor[i]);
                        console.table(this.details.doctor[i]);
                    }
                }
                break;
            case 2 :
                var dr_Id = utility.readLine().questionInt("\nEnter id of the doctor : ");
                for (let i in this.details.doctor) {
                    if (this.details.doctor[i].dr_Id == dr_Id) {
                        //console.log(this.details.doctor[i]);
                        console.table(this.details.doctor[i]);
                    }
                }
                break;
            case 3 :
                var speciality = utility.readLine().question("\nEnter speciality of the doctor : ");
                for (let i in this.details.doctor) {
                    if (this.details.doctor[i].speciality == speciality) {
                        //console.log(this.details.doctor[i]);
                        console.table(this.details.doctor[i]);
                    }
                }
                break;
            case 4 :
                var availability = utility.readLine().question("\nEnter availability of the doctor : ");
                for (i in this.details.doctor) {
                    if (this.details.doctor[i].availability == availability) {
                        //console.log(this.details.doctor[i]);
                        console.table(this.details.doctor[i]);
                    }
                }
                break;
            default:
                console.log("\nEnter valid choice");
                break
        }
    }

    /**
     * @description : searching patient by name, id, mobile.
     */
    searchPatient() {

        console.log("\n\t1) Search by name\n\t2) Search by Id\n\t3) Search by mobile number\n");
        let choice = utility.readLine().questionInt("\nEnter your choice : ");
        switch (choice) {
            case 1 :
                var patientName = utility.readLine().question("\nEnter name of the patient : ");
                for (let i in this.details.patient) {
                    if (this.details.patient[i].patientName == patientName) {
                        //console.log(this.details.patient[i]);
                        console.table(this.details.patient[i]);
                    }
                }
                break;
            case 2 :
                var p_Id = utility.readLine().question("\nEnter id of the patient : ");
                for (let i in this.details.patient) {
                    if (this.details.patient[i].p_Id == p_Id) {
                        //console.log(this.data.patient[i]);
                        console.table(this.details.patient[i]);
                    }
                }
                break;
            case 3 :
                var mobileNumber = utility.readLine().question("\nEnter mobile no of the patient : ");
                for (let i in this.details.patient) {
                    if (this.details.patient[i].mobileNumber == mobileNumber) {
                        //console.log(this.details.patient[i]);
                        console.table(this.details.patient[i]);
                    }
                }
                break;

            default:
                console.log("\nEnter valid choice");
        }
    }

}


module.exports = {
    cliniqueManagement,

    /**
     * @description : returning utility object
     */
    Utility(){
        return utility;
    }
}









