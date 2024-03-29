/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */


/**
 * @author Vitaliy Fedoriv
 */

import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { flags } from 'app/flags/flags'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  private updateSubscription: Subscription;

  // Get the text value of welcomeMessage from CloudBees Feature Management
  welcomeMessage = flags.welcomeMessage.getValue();
  // Set the text value of welcomeMessage displayed on the web page
  welcomeImage = setWelcomeImage(flags.welcomeImage.getValue());

  constructor() {
  }

  ngOnInit() {
    // Get Flags information every second and refresh the module
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.welcomeMessage = flags.welcomeMessage.getValue(),
      this.welcomeImage = setWelcomeImage(flags.welcomeImage.getValue())
    });
  }

}

function setWelcomeImage(welcomeImageFlag) {
  // Set the default image to pets.png
  let welcomeImage: string = "./assets/images/pets.png";

  // Change the displayed image from its Flag value
  if ( welcomeImageFlag == "pets" ) {
    welcomeImage = "./assets/images/pets.png";
  } else if ( welcomeImageFlag == "cats" ) {
    welcomeImage = "./assets/images/cats.png";
  } else if ( welcomeImageFlag == "koala" ) {
    welcomeImage = "./assets/images/koala.png";
  }
  return welcomeImage;
 }