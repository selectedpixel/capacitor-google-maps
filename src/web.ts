import { WebPlugin } from "@capacitor/core";

import {
  CapacitorGoogleMapsPlugin,
  CallbackID,
  InitializeOptions,
  CreateMapOptions,
  CreateMapResult,
  UpdateMapOptions,
  UpdateMapResult,
  MoveCameraOptions,
  MoveCameraResult,
  ElementFromPointResultOptions,
  AddMarkerOptions,
  AddMarkerResult,
  DidCloseInfoWindowCallback,
  DidTapMapCallback,
  DidTapMarkerCallback,
  DefaultEventOptions,
  DefaultEventWithPreventDefaultOptions,
} from "./definitions";

export class CapacitorGoogleMapsWeb extends WebPlugin
  implements CapacitorGoogleMapsPlugin {
  constructor() {
    super({
      name: "CapacitorGoogleMaps",
      platforms: ["web"],
    });
  }

  async initialize(_options: InitializeOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async createMap(_options: CreateMapOptions): Promise<CreateMapResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async updateMap(_options: UpdateMapOptions): Promise<UpdateMapResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async moveCamera(_options: MoveCameraOptions): Promise<MoveCameraResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async elementFromPointResult(
    _options: ElementFromPointResultOptions
  ): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async addMarker(_options: AddMarkerOptions): Promise<AddMarkerResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async removeMarker(_markerId: string): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didCloseInfoWindow(
    _options: DefaultEventOptions,
    _callback: DidCloseInfoWindowCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMap(
    _options: DefaultEventOptions,
    _callback: DidTapMapCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMarker(
    _options: DefaultEventWithPreventDefaultOptions,
    _callback: DidTapMarkerCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }
}
