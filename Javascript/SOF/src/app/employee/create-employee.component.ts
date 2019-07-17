import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  validationMessages = {

    'fullName': {
      'required': 'Full Name is required',
      'minLength': 'FUll Name must be greater than 3 characters',
      "maxLength": 'Full Name must be less than 10 characters'
    },

    'email': {
      'required': 'Email is required.',
    },
    'skillName' : {
      'required' : 'SKill Name is required',
    },
    'experienceInYears':{
      'required' : 'Experience is required',
    },
    'proficiency':{
      'required': 'Proficiency is required',
    }
  };

  formErrors ={
    'fullName' :'',
    'email': '',
    'skillName':'',
    'experienceInYears':'',
    'proficiency':''
  }

  // fullNameLength = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      //key value pair
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['',Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['',Validators.required],
        proficiency: ['',Validators.required]
      }),
    });

    // this.employeeForm.get('fullName').valueChanges.subscribe((value : string) =>{
    //   // console.log(value);
    //   // this.fullNameLength =value.length;
    //   console.log(JSON.stringify(value));
    // });
  }
  onLoadDataClick(): void {
    // this.employeeForm.patchValue({
    //   fullName : 'Click Source Manager',
    //   email: 'clikSource2019@gmail.com',
    //   skills :{
    //      skillName : 'Angular',
    //      experienceInYears : 5,
    //      proficiency : 'beginner'
    //   }

    // });
    this.LogValidationErrors(this.employeeForm);
    console.log(this.formErrors);
  }

  LogValidationErrors(group: FormGroup): void {
    // console.log(Object.keys(group.controls));
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.LogValidationErrors(abstractControl);
      } else {
        // console.log('Key = ' + key + ' Value =' + abstractControl.value);
        // abstractControl.disable();
        //  abstractControl.markAsDirty();
        this.formErrors[key] = '';
        if(abstractControl && ! abstractControl.valid){

          const messages = this.validationMessages[key];
          // console.log(messages);
          // console.log(abstractControl.errors);
        
          for(const errorKey in abstractControl.errors){
            if(errorKey){
              this.formErrors[key] += messages[errorKey] + '' ;
            }
          }
        }
        
      }

    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
