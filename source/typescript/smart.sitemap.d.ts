import  {BaseElement, Animation} from "./smart.element"

export interface SiteMapProperties {
  /**
   * Sets or retrieves the sites as [{ id, name, x, y, lat, lon, state, alarms, reading, unit, description, href }]. On a picture, x and y are percent from its top left; with tiles, lat and lon place the site. state is normal, warning, alarm, offline or maintenance, in any case and with spaces round it ignored - or an alarm bit (1 or true is alarm, 0 or false normal), or the whole number 2 warning, 3 offline, 4 maintenance. Anything else - no state, an empty string, another word such as stale, a number outside 0 to 4 or not whole - is unknown: drawn as a hollow dotted marker with a question mark, named "State unknown", counted in the summary line and sorted in the table straight after warning (alarm, warning, unknown, offline, maintenance, normal), so a site whose state cannot be read never passes for normal. "All normal" is said only when every site is normal. A numeric reading is shown with unit; a reading that is there but is no reading (NaN, Infinity, null, an object, "NaN") shows "--" and is spoken "no reading"; a site without a reading shows none. href adds a link to the site's card (http, https or a path; nothing else is made a link). Assign a new array to update the component; readings, states and alarm counts can also come through push(). An item that is not a site (null, a number, an object with neither id nor name) is skipped with one console warning; a site with a name and no id goes by its name.
   * Default value: 
   */
  sites?: any;
  /**
   * Sets or retrieves the heading of the map. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the URL of an image under the sites. Without one, an SVG placed inside the element is the picture, and without that the sites sit on a grid.
   * Default value: ""
   */
  background?: string;
  /**
   * Sets or retrieves the URL of the map tiles, with {z}, {x} and {y}, and optionally {s} for a subdomain - https://tile.openstreetmap.org/{z}/{x}/{y}.png, or a plant's own tile server. With tiles, sites are placed by lat and lon. Nothing is fetched while it is empty.
   * Default value: ""
   */
  tiles?: string;
  /**
   * Sets or retrieves the letters {s} in tiles takes, one per tile in turn.
   * Default value: "abc"
   */
  tileSubdomains?: string;
  /**
   * Sets or retrieves the tile provider's credit, shown in the corner of the map. OpenStreetMap's own is shown when tiles come from it and this is empty.
   * Default value: ""
   */
  attribution?: string;
  /**
   * Sets or retrieves where a map with tiles opens, as { lat, lon }. With zoom; null (either) fits every site.
   * Default value: null
   */
  center?: any;
  /**
   * Sets or retrieves the tile zoom a map opens at (1 to maxZoom), or the magnification of a picture (1 to 8). null fits every site.
   * Default value: null
   */
  zoom?: number;
  /**
   * Sets or retrieves the closest tile zoom offered.
   * Default value: 18
   */
  maxZoom?: number;
  /**
   * Sets or retrieves whether the map pans and zooms at all. Off, it stays as it opened and the zoom buttons are gone.
   * Default value: true
   */
  zoomable?: boolean;
  /**
   * Sets or retrieves what the mouse wheel does over the map: zoom only with Ctrl held, as a page the map is only part of needs (the wheel alone scrolls the page, and a hint says how to zoom); always; or never.
   * Default value: ctrl
   */
  wheelZoom?: SiteMapWheelZoom | string;
  /**
   * Sets or retrieves where the selected site's card opens: under the map, beside its marker, or nowhere (for a screen with its own detail panel).
   * Default value: below
   */
  detail?: SiteMapDetail | string;
  /**
   * Sets or retrieves the picture's width to height, as CSS aspect-ratio has it.
   * Default value: "16 / 9"
   */
  aspectRatio?: string;
  /**
   * Sets or retrieves the id of the selected site, which is shown under the map.
   * Default value: ""
   */
  selected?: string;
  /**
   * Sets or retrieves whether the sites are shown on the map or as a table.
   * Default value: map
   */
  view?: SiteMapView | string;
  /**
   * Sets or retrieves whether every site is named beside its marker. Off, only the selected site and those that need someone are named.
   * Default value: true
   */
  showLabels?: boolean;
  /**
   * Sets or retrieves whether the map is disabled. Disabled, every button of the map is disabled and the link leaves the tab order: nothing is reached, clicked, panned or zoomed, and no event is raised. They come back when it is cleared.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the map can be focused. Set, no part of the map is a tab stop; the pointer still works.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 SiteMap puts many sites on one picture - the pump stations of a water network, the turbines of a wind farm, the substations of a grid - so that "where is something wrong" is answered with a place. The picture is the plant's own (an image, or an SVG placed inside the element that takes the theme's colours, with sites by percent) or the world: map tiles from any tile server named in tiles, with sites by latitude and longitude, drawn muted so the sites and not the streets are what the eye finds. Nothing is fetched until tiles is set, and a plant can point it at its own tile server. Either picture pans with a drag and zooms with the buttons, a pinch, a double-click, the plus and minus keys, or Ctrl and the wheel. A site that is fine is neutral grey; colour, the alarm count and a heavier mark are only for a site that needs someone. A site's card opens under the map or beside its marker, with Open for its own screen and a link when it has one; readings, states and alarm counts follow tags through push(). A summary line counts what is wrong, the markers are one tab stop walked with the arrow keys, and the same sites are a table one click away, worst first. The arrow keys walk the markers in reading order: top to bottom, then left to right - or right to left on a right-to-left page or with rightToLeft, where ArrowLeft is the next site and ArrowRight the previous. Right to left (rightToLeft, or a right-to-left page) the heading, the table and the cards mirror; the map itself does not - geography and a plant's picture have no reading direction. Readings are formatted in the element's locale.
*/
export interface SiteMap extends BaseElement, SiteMapProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a site is selected on the map or in the table - or deselected, with an empty id, when its card is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(id)
   *  id - The id of the site.
   */
  onSiteSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered by the Open button of the selected site, for the application to go to that site's screen.
	* @param event. The custom event. Custom data event was created with: ev.detail(id)
   *  id - The id of the site.
   */
  onSiteOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the map has been panned or zoomed, once the movement stops - with the view as getView() gives it, for an application that keeps where an operator left the map.
	* @param event. The custom event. Custom data event was created with: ev.detail(zoom, center)
   *  zoom - The zoom.
   *  center - The center: { lat, lon } with tiles, { x, y } in percent on a picture.
   */
  onMapMove?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the operator switches between the map and the table.
	* @param event. The custom event. Custom data event was created with: ev.detail(view)
   *  view - map or list.
   */
  onViewChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Changes readings, states and alarm counts as they arrive, without re-sending the list: <em>{ '&lt;site id&gt;.reading': 4.2, '&lt;site id&gt;.state': 1 }</em>. The record a strip chart's push takes, so Connect.stream() feeds a map as it feeds a chart. A new sites array drops what push brought for the old one. A state goes through the same reading as in sites: a word or code the map does not know makes the site unknown, not normal.
   * @param {any} record. Fields named '&lt;site id&gt;.&lt;reading|state|alarms|description|name&gt;'.
   */
  push(record: any): void;
  /**
   * Shows every site: the closest zoom at which they all fit.
   */
  fit(): void;
  /**
   * Zooms in a step at the middle of the map.
   */
  zoomIn(): void;
  /**
   * Zooms out a step.
   */
  zoomOut(): void;
  /**
   * Returns where the map is looking: <em>{ zoom, center: { lat, lon } }</em> with tiles, <em>{ zoom, center: { x, y } }</em> on a picture.
   * @returns {any}
   */
  getView(): any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-site-map"): SiteMap;
        querySelector(selectors: "smart-site-map"): SiteMap | null;
        querySelectorAll(selectors: "smart-site-map"): NodeListOf<SiteMap>;
        getElementsByTagName(qualifiedName: "smart-site-map"): HTMLCollectionOf<SiteMap>;
        getElementsByName(elementName: "smart-site-map"): NodeListOf<SiteMap>;
    }
}

/**Sets or retrieves what the mouse wheel does over the map: zoom only with Ctrl held, as a page the map is only part of needs (the wheel alone scrolls the page, and a hint says how to zoom); always; or never. */
export declare type SiteMapWheelZoom = 'ctrl' | 'always' | 'never';
/**Sets or retrieves where the selected site's card opens: under the map, beside its marker, or nowhere (for a screen with its own detail panel). */
export declare type SiteMapDetail = 'below' | 'popup' | 'none';
/**Sets or retrieves whether the sites are shown on the map or as a table. */
export declare type SiteMapView = 'map' | 'list';
