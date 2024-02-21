import { Instance, flow, onSnapshot, types } from "mobx-state-tree"
import * as storage from "../util/storage"
import log from "@/util/logger"

/*
Hint documentation links:
- https://mobx-state-tree.js.org/intro/welcome
- https://developers.amadeus.com/get-started/create-a-flight-booking-engine-651
- https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-search
- https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-price
- https://developers.amadeus.com/self-service/category/flights/api-doc/flight-create-orders
*/

/*
Other hints:
- only get the first 3 results from the response
- only get round trip flights
- axios is already installed, you can use it to make your requests
- parse the response to only include the necessary data to display in the UI
*/

export const FlightData = types.frozen()

export const RootStoreModel = types
	.model("RootStore")
	.props({
		searchedFlights: types.maybe(types.array(FlightData)),
		confirmedFlights: types.maybe(types.array(FlightData)),
		selectedFlight: types.maybe(FlightData),
	})
	.actions(self => ({
		setSearchedFlights(flights: any) {
			try {
				self.searchedFlights = flights
			} catch (e: any) {
				log.error("Failed to set searched flights", e.message)
			}
		},
		setConfirmedFlights(flights: any) {
			try {
				self.confirmedFlights = flights
			} catch (e: any) {
				log.error("Failed to set confirmed flights", e.message)
			}
		},
		setSelectedFlight(flight: any) {
			try {
				self.selectedFlight = flight
			} catch (e: any) {
				log.error("Failed to set selected flight", e.message)
			}
		},
	}))
	.actions(self => ({
		queryAmadeusFlightsSearch: flow(function* queryAmadeusSearchFlights() {
			try {
				// TODO: Task 1, Step 1
			} catch (e: any) {
				log.error(e.message, null)
			}
		}),
		queryAmadeusFlightOffersPrice: flow(function* queryAmadeusFlightOffersPrice() {
			try {
				// TODO: Task 1, Step 3
			} catch (e: any) {
				log.error(e.message, null)
			}
		}),
		queryAmadeusFlightCreateOrder: flow(function* queryAmadeusFlightCreateOrder() {
			try {
				// TODO: Task 1, Step 5
				// Hint: choose the first flight from the confirmedFlights array
			} catch (e: any) {
				log.error(e.message, null)
			}
		}),
	}))
	.actions(self => ({
		storeConfirmedFlightData: flow(function* storeConfirmedFlightData() {
			try {
				// TODO: Task 2, Step 4
				/*
				 Hint: DataStore has functions like save, query, and delete, but a model must be defined first
					If you are running into issues, it might have to do with:
					- the model not being defined correctly
					- forgetting to run amplify pull or amplify codegen
					- not having the right permissions set in the AWS console
					- not starting or clearing the local DataStore
				*/
			} catch (e: any) {
				log.error(e.message, null)
			}
		}),
	}))

export type RootStore = Instance<typeof RootStoreModel>

const ROOT_STATE_STORAGE_KEY = "root"

export const setupRootStore = async () => {
	let rootStore: RootStore
	let data: any

	try {
		data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
		rootStore = RootStoreModel.create(data)
	} catch (e: any) {
		rootStore = RootStoreModel.create({})
		__DEV__ && log.error(e.message, null)
	}

	try {
		onSnapshot(rootStore, async snapshot => {
			try {
				await storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
			} catch (e: any) {
				__DEV__ && log.error("Failed to save root store snapshot", e)
			}
		})
	} catch (e: any) {
		__DEV__ && log.error("Failed to set snapshot listener", e)
	}

	return rootStore
}
