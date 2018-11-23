export class Store {
    storeProfile: {
        name: any,
        avatarUrl: any,
        cellNumber: any,
    };
    location: string;
    establishmentType: string;
    // tradingHours: string
    reviewsRatings: Array<Reviews>;
    slogan: string;
    floorSetting: Array<Setup>;
    makeReservations: boolean;
    storeOwner: string;
    employees: Array<Staff>;
    contact: {
        name: any,
        position: any,
        // cellNumber: any,
    };

}

 export class Setup {
    seatsType: any;
    capacity: any;
}

interface Staff {
    username: any;
    position: any;
}

interface Reviews {
by: string;
when: string;
content: string;
rating: number;
}
