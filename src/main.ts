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

/*const API_HOST = 'https://api.cloudbees.io'
//const API_HOST = 'https://api-staging.saas-dev.beescloud.com'
const options = {
  configuration: {
    API_HOST: API_HOST,
    CD_API_ENDPOINT: `${API_HOST}/device/get_configuration`,
    CD_S3_ENDPOINT: 'https://development-conf.rollout.io/',
    SS_API_ENDPOINT: `${API_HOST}/device/update_state_store/`,
    SS_S3_ENDPOINT: 'https://development-statestore.rollout.io/',
    CLIENT_DATA_CACHE_KEY: 'client_data',
    ANALYTICS_ENDPOINT: 'https://localhost:8787',
    NOTIFICATIONS_ENDPOINT: 'https://api-staging.saas-dev.beescloud.com/sse'
  },
  debugLevel: 'verbose',
  disableSignatureVerification: true
}*/
const options = { };

async function initRollout() {
  // Register the flags with Rollout
  Rox.register('', flags);
  // Setup the Rollout key
  await Rox.setup('bee74dcf-53c3-4aa6-5c08-2b61664b1444', options as Rox.RoxSetupOptions);
}

initRollout().then(function() {
  console.log('Done loading Rollout');
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));