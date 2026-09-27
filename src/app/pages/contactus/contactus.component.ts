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

    // 🔄 Loading spinner
    Swal.fire({
      title: '📩 Sending Your Message...',
      text: 'Hang tight! We are processing your request.',
      background: '#f4f9ff',
      color: '#2c3e50',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const formData = this.registerForm.value;

    this.http.post('https://formspree.io/f/myzpaekl', formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '✅ Thank You!',
          text: 'Your message has been sent successfully. We will get back to you shortly.',
          background: '#e8f9f1',
          color: '#14532d',
          confirmButtonText: 'Close',
          confirmButtonColor: '#16a34a',
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
          title: '⚠️ Oops!',
          text: 'Something went wrong. Please try again later.',
          background: '#fff5f5',
          color: '#7f1d1d',
          confirmButtonText: 'Retry',
          confirmButtonColor: '#dc2626',
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
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }


}


