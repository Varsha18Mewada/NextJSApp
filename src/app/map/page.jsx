"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style } from "ol/style";
import { useRouter } from "next/navigation";
import projects from "app/data/projects";

export default function MapPage() {
  const mapRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const vectorSource = new VectorSource();

    projects.forEach((project) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(project.coordinates)),
        projectId: project.id,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: "static/images/marker.png", 
            scale: 0.05,
          }),
        })
      );

      vectorSource.addFeature(feature);
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([78.9629, 22.5937]),
        zoom: 5,
      }),
    });

    map.on("singleclick", function (evt) {
      map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        const id = feature.get("projectId");
        if (id) {
          router.push(`/projects/${id}`);
        }
      });
    });

    return () => map.setTarget(null);
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Project Locations</h1>
      <div ref={mapRef} className="w-full h-[80vh] border rounded-lg shadow" />
    </div>
  );
}
