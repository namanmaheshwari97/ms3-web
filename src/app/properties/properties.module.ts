import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesService} from './properties.service';
import {PropertyService} from './property.service';
import {CreateListingPageComponent} from './create-listing-page/create-listing-page.component';
import {ClarityModule} from 'clarity-angular';
import {PropertyFormComponent} from './property-form/property-form.component';
import {AddressVerificationFormComponent} from './address-verification-form/address-verification-form.component';
import {ImageFormComponent} from './image-form/image-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {PropertyCreateEffects} from './property-create.effects';
import {PropertyRemoveEffects} from './property-remove.effects';
import {RemoveListingPageComponent} from './remove-listing-page/remove-listing-page.component';
import {RouterModule} from '@angular/router';
import {PropertyListPageComponent} from './property-list-page/property-list-page.component';
import {PropertiesSortComponent} from './properties-sort/properties-sort.component';
import {PropertiesComponent} from './properties/properties.component';
import {PropertiesQueryEffects} from './properties-query.effects';
import {PropertyOptionsEffects} from './property-options-get.effects';
import {PropertyPageComponent} from './property-page/property-page.component';
import {AgmCoreModule} from '@agm/core';
import {PropertyGetEffects} from './property-get.effects';
import {SearchingBarComponent} from './searching-bar/searching-bar.component';
import {SharedModule} from '../shared/shared.module';
import { PropertiesFilterComponent } from './properties-filter/properties-filter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClarityModule.forChild(),
    EffectsModule.forFeature([
      PropertyCreateEffects,
      PropertyRemoveEffects,
      PropertiesQueryEffects,
      PropertyOptionsEffects,
      PropertyGetEffects
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyBEPHoazpK_80ozU_Hq1wGK8cHj9QqMQ'
    }),
    SharedModule
  ],
  declarations: [
    CreateListingPageComponent,
    PropertyFormComponent,
    AddressVerificationFormComponent,
    ImageFormComponent,
    RemoveListingPageComponent,
    PropertyListPageComponent,
    PropertiesSortComponent,
    PropertiesComponent,
    PropertyPageComponent,
    SearchingBarComponent,
    PropertiesFilterComponent
  ],
  providers: [PropertiesService, PropertyService]
})
export class PropertiesModule {
}
