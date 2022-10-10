'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">LMS-Lite documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' : 'data-target="#xs-components-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' :
                                            'id="xs-components-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                            <li class="link">
                                                <a href="components/AddGrPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddGrPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddInvoicePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddInvoicePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlarmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlarmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlarmListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlarmListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlarmUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlarmUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertsListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertsListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalyticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalyticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BackButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingPartyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingPartyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingPartyDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingPartyDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingPartyListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingPartyListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingPartyUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingPartyUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrokerMemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrokerMemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrokerMemoListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrokerMemoListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrokerMemoUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrokerMemoUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalibComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalibComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTripComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateTripComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeviceMasterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceMasterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DriverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DriverDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DriverListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DriverUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DutyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DutyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DutyListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DutyListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DutyUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DutyUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyTripComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptyTripComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuelLevelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuelLevelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeofenceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeofenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeofenceListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeofenceListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeofenceUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeofenceUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GpsReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GpsReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrWithoutTripComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrWithoutTripComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrWithoutTripListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrWithoutTripListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrWithoutTripUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrWithoutTripUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItineraryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItineraryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandmarkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandmarkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandmarkListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandmarkListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandmarkUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandmarkUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiveTrackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveTrackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialCardDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialCardDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialGroupListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialGroupListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialGroupUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialGroupUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MilestoneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MilestoneViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaybackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaybackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaybackFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaybackFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaybackListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaybackListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SensorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SensorListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SensorUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShareLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShareTripComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareTripComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrafficManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrafficManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransportRouteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransportRouteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransportRouteListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransportRouteListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransportRouteUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransportRouteUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripGpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripGpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripMemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripMemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripMemoListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripMemoListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripMemoUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripMemoUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VendorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendorListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VendorListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendorUpsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VendorUpsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendordealPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VendordealPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' : 'data-target="#xs-directives-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' :
                                        'id="xs-directives-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                        <li class="link">
                                            <a href="directives/AddrSearchDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddrSearchDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' : 'data-target="#xs-injectables-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' :
                                        'id="xs-injectables-links-module-AppModule-472d576de43e1a19bf54757f2f48a76ef9d4ac775c889b2a193be1749547208a56c2aa3da29dc9909b0bf2e5ae6db14e0eaf7f61b25595739342eabd815e5b90"' }>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WebsocketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebsocketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonPipsModule.html" data-type="entity-link" >CommonPipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CommonPipsModule-389f41bfc5f8281bd99b54a3d70a8bacce10d9d2d073f5375d7c709100822d8e41b779b997ab8318cffa5c70ca83eae0aed68b43306aa70fa828bf0387404d2a"' : 'data-target="#xs-pipes-links-module-CommonPipsModule-389f41bfc5f8281bd99b54a3d70a8bacce10d9d2d073f5375d7c709100822d8e41b779b997ab8318cffa5c70ca83eae0aed68b43306aa70fa828bf0387404d2a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CommonPipsModule-389f41bfc5f8281bd99b54a3d70a8bacce10d9d2d073f5375d7c709100822d8e41b779b997ab8318cffa5c70ca83eae0aed68b43306aa70fa828bf0387404d2a"' :
                                            'id="xs-pipes-links-module-CommonPipsModule-389f41bfc5f8281bd99b54a3d70a8bacce10d9d2d073f5375d7c709100822d8e41b779b997ab8318cffa5c70ca83eae0aed68b43306aa70fa828bf0387404d2a"' }>
                                            <li class="link">
                                                <a href="pipes/ArrayOfIntermitPointforcsvPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArrayOfIntermitPointforcsvPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ArrayofstringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArrayofstringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CalHourMinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalHourMinPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterTripStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTripStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterstringgetdatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterstringgetdatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FormatAddressPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatAddressPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MergeStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergeStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SecToDDHHMMPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecToDDHHMMPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SumofbillingNoOfUnitsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SumofbillingNoOfUnitsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SumofbillingWeightPerUnit.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SumofbillingWeightPerUnit</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/getArrayElementSumPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >getArrayElementSumPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedComponentModule.html" data-type="entity-link" >SharedComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedComponentModule-cb8ec69ee8a9963fa9eda44fbc4939599992e065f3cff59fb987e5e7732119b75be0c2ca7bdb4732e39340c16b1026877b2aa059c05acf2f82c71dcf9f723df9"' : 'data-target="#xs-components-links-module-SharedComponentModule-cb8ec69ee8a9963fa9eda44fbc4939599992e065f3cff59fb987e5e7732119b75be0c2ca7bdb4732e39340c16b1026877b2aa059c05acf2f82c71dcf9f723df9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedComponentModule-cb8ec69ee8a9963fa9eda44fbc4939599992e065f3cff59fb987e5e7732119b75be0c2ca7bdb4732e39340c16b1026877b2aa059c05acf2f82c71dcf9f723df9"' :
                                            'id="xs-components-links-module-SharedComponentModule-cb8ec69ee8a9963fa9eda44fbc4939599992e065f3cff59fb987e5e7732119b75be0c2ca7bdb4732e39340c16b1026877b2aa059c05acf2f82c71dcf9f723df9"' }>
                                            <li class="link">
                                                <a href="components/UploadAccordianComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadAccordianComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AlertsComponent.html" data-type="entity-link" >AlertsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemoImagePickerBasicComponent.html" data-type="entity-link" >DemoImagePickerBasicComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MaterialGroupComponent.html" data-type="entity-link" >MaterialGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MaterialGroupUpsertComponentT.html" data-type="entity-link" >MaterialGroupUpsertComponentT</a>
                            </li>
                            <li class="link">
                                <a href="components/QrBarcodeComponent.html" data-type="entity-link" >QrBarcodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UploadUtilComponent.html" data-type="entity-link" >UploadUtilComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChartService.html" data-type="entity-link" >ChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstantService.html" data-type="entity-link" >ConstantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormulaService.html" data-type="entity-link" >FormulaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GsaddressService.html" data-type="entity-link" >GsaddressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageService.html" data-type="entity-link" >ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImgPreviewService.html" data-type="entity-link" >ImgPreviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MasterService.html" data-type="entity-link" >MasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObjToCsvService.html" data-type="entity-link" >ObjToCsvService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhoneService.html" data-type="entity-link" >PhoneService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebsocketService.html" data-type="entity-link" >WebsocketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link" >InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/drawLine.html" data-type="entity-link" >drawLine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/drawLine-1.html" data-type="entity-link" >drawLine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/drawLine-2.html" data-type="entity-link" >drawLine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/drawLine-3.html" data-type="entity-link" >drawLine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilePath.html" data-type="entity-link" >FilePath</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng-1.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng-2.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng-3.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng-4.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LatLng-5.html" data-type="entity-link" >LatLng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-1.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-2.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-3.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-4.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-5.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-6.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-7.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker-8.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MoreMenu.html" data-type="entity-link" >MoreMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline.html" data-type="entity-link" >Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline-1.html" data-type="entity-link" >Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline-2.html" data-type="entity-link" >Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline-3.html" data-type="entity-link" >Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline-4.html" data-type="entity-link" >Polyline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Polyline-5.html" data-type="entity-link" >Polyline</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});