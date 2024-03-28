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

import * as Rox from 'rox-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { flags } from './app/flags/flags'

if (environment.production) {
  enableProdMode();
}

async function initPlatform() {
  const options = { };
  // Register the flags with Rollout
  Rox.register('', flags);
  // Setup the Rollout key
  await Rox.setup('56106f48-7935-47ea-7868-514152a4add7', options);
}

initPlatform().then(function() {
  console.log('Done loading CloudBees platform');
});