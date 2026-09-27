import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
    AOS.init();
    this.scrollToTop();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    Swal.fire({
      title: 'Sending your message',
      text: 'Please wait while we connect with PoojaVeda.',
      background: '#fbf8f0',
      color: '#1d4b3d',
      customClass: { popup: 'poojaveda-alert', title: 'poojaveda-alert-title', htmlContainer: 'poojaveda-alert-copy' },
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const formData = this.registerForm.value;

    this.http.post('https://formspree.io/f/myzpaekl', formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Thank you',
          text: 'Your message has been sent. We will get back to you shortly.',
          background: '#fbf8f0',
          color: '#1d4b3d',
          customClass: { popup: 'poojaveda-alert', title: 'poojaveda-alert-title', htmlContainer: 'poojaveda-alert-copy', confirmButton: 'poojaveda-alert-button' },
          confirmButtonText: 'Close',
          buttonsStyling: false,
          timer: 5000,
          timerProgressBar: true,
          allowOutsideClick: false,
          allowEscapeKey: false
        });
        this.registerForm.reset();
        this.submitted = false;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'We could not send that',
          text: 'Something went wrong. Please try again later.',
          background: '#fbf8f0',
          color: '#754d31',
          customClass: { popup: 'poojaveda-alert', title: 'poojaveda-alert-title', htmlContainer: 'poojaveda-alert-copy', confirmButton: 'poojaveda-alert-button' },
          confirmButtonText: 'Retry',
          buttonsStyling: false,
          timer: 5000,
          timerProgressBar: true
        });
      }
    });
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  scrollToTop() {
    window.scrollTo(0, 0);
  }


}


