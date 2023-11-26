export declare class GeoLocation {
    private latitude;
    private longitude;
    init(enableHighAccuracy?: boolean, timeout?: number, maximumAge?: number): void;
    setPosition(position: any): void;
    getPosition(): {
        latitude: any;
        longitude: any;
    };
    resetPosition(): void;
    displayError(errorMessage: any): void;
    locationError(error: any): void;
}
