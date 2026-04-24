var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Del07al19deAbril2026_2 = new ol.format.GeoJSON();
var features_Del07al19deAbril2026_2 = format_Del07al19deAbril2026_2.readFeatures(json_Del07al19deAbril2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del07al19deAbril2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del07al19deAbril2026_2.addFeatures(features_Del07al19deAbril2026_2);
var lyr_Del07al19deAbril2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del07al19deAbril2026_2, 
                style: style_Del07al19deAbril2026_2,
                popuplayertitle: 'Del 07 al 19 de Abril 2026',
                interactive: true,
                title: '<img src="styles/legend/Del07al19deAbril2026_2.png" /> Del 07 al 19 de Abril 2026'
            });
var format_Del23deMarzoal06deAbril2026_3 = new ol.format.GeoJSON();
var features_Del23deMarzoal06deAbril2026_3 = format_Del23deMarzoal06deAbril2026_3.readFeatures(json_Del23deMarzoal06deAbril2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del23deMarzoal06deAbril2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del23deMarzoal06deAbril2026_3.addFeatures(features_Del23deMarzoal06deAbril2026_3);
var lyr_Del23deMarzoal06deAbril2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del23deMarzoal06deAbril2026_3, 
                style: style_Del23deMarzoal06deAbril2026_3,
                popuplayertitle: 'Del 23 de Marzo al 06 de Abril 2026',
                interactive: true,
                title: '<img src="styles/legend/Del23deMarzoal06deAbril2026_3.png" /> Del 23 de Marzo al 06 de Abril 2026'
            });
var format_Del02al22deMarzo2026_4 = new ol.format.GeoJSON();
var features_Del02al22deMarzo2026_4 = format_Del02al22deMarzo2026_4.readFeatures(json_Del02al22deMarzo2026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del02al22deMarzo2026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del02al22deMarzo2026_4.addFeatures(features_Del02al22deMarzo2026_4);
var lyr_Del02al22deMarzo2026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del02al22deMarzo2026_4, 
                style: style_Del02al22deMarzo2026_4,
                popuplayertitle: 'Del 02 al 22 de Marzo 2026',
                interactive: true,
                title: '<img src="styles/legend/Del02al22deMarzo2026_4.png" /> Del 02 al 22 de Marzo 2026'
            });
var format_Del16deFebreroal01deMarzo2026_5 = new ol.format.GeoJSON();
var features_Del16deFebreroal01deMarzo2026_5 = format_Del16deFebreroal01deMarzo2026_5.readFeatures(json_Del16deFebreroal01deMarzo2026_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del16deFebreroal01deMarzo2026_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del16deFebreroal01deMarzo2026_5.addFeatures(features_Del16deFebreroal01deMarzo2026_5);
var lyr_Del16deFebreroal01deMarzo2026_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del16deFebreroal01deMarzo2026_5, 
                style: style_Del16deFebreroal01deMarzo2026_5,
                popuplayertitle: 'Del 16 de Febrero al 01 de Marzo 2026',
                interactive: true,
                title: '<img src="styles/legend/Del16deFebreroal01deMarzo2026_5.png" /> Del 16 de Febrero al 01 de Marzo 2026'
            });
var format_Del29deEneroal15deFebrero2026_6 = new ol.format.GeoJSON();
var features_Del29deEneroal15deFebrero2026_6 = format_Del29deEneroal15deFebrero2026_6.readFeatures(json_Del29deEneroal15deFebrero2026_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del29deEneroal15deFebrero2026_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del29deEneroal15deFebrero2026_6.addFeatures(features_Del29deEneroal15deFebrero2026_6);
var lyr_Del29deEneroal15deFebrero2026_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del29deEneroal15deFebrero2026_6, 
                style: style_Del29deEneroal15deFebrero2026_6,
                popuplayertitle: 'Del 29 de Enero al 15 de Febrero 2026',
                interactive: true,
                title: '<img src="styles/legend/Del29deEneroal15deFebrero2026_6.png" /> Del 29 de Enero al 15 de Febrero 2026'
            });
var format_Del15al28deEnero2026_7 = new ol.format.GeoJSON();
var features_Del15al28deEnero2026_7 = format_Del15al28deEnero2026_7.readFeatures(json_Del15al28deEnero2026_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del15al28deEnero2026_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del15al28deEnero2026_7.addFeatures(features_Del15al28deEnero2026_7);
var lyr_Del15al28deEnero2026_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del15al28deEnero2026_7, 
                style: style_Del15al28deEnero2026_7,
                popuplayertitle: 'Del 15 al 28 de Enero 2026',
                interactive: true,
                title: '<img src="styles/legend/Del15al28deEnero2026_7.png" /> Del 15 al 28 de Enero 2026'
            });
var format_Del07al19deAbril2026_8 = new ol.format.GeoJSON();
var features_Del07al19deAbril2026_8 = format_Del07al19deAbril2026_8.readFeatures(json_Del07al19deAbril2026_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del07al19deAbril2026_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del07al19deAbril2026_8.addFeatures(features_Del07al19deAbril2026_8);
var lyr_Del07al19deAbril2026_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del07al19deAbril2026_8, 
                style: style_Del07al19deAbril2026_8,
                popuplayertitle: 'Del 07 al 19 de Abril 2026',
                interactive: true,
                title: '<img src="styles/legend/Del07al19deAbril2026_8.png" /> Del 07 al 19 de Abril 2026'
            });
var format_Del23deMarzoal06deAbril2026_9 = new ol.format.GeoJSON();
var features_Del23deMarzoal06deAbril2026_9 = format_Del23deMarzoal06deAbril2026_9.readFeatures(json_Del23deMarzoal06deAbril2026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del23deMarzoal06deAbril2026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del23deMarzoal06deAbril2026_9.addFeatures(features_Del23deMarzoal06deAbril2026_9);
var lyr_Del23deMarzoal06deAbril2026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del23deMarzoal06deAbril2026_9, 
                style: style_Del23deMarzoal06deAbril2026_9,
                popuplayertitle: 'Del 23 de Marzo al 06 de Abril 2026',
                interactive: true,
                title: '<img src="styles/legend/Del23deMarzoal06deAbril2026_9.png" /> Del 23 de Marzo al 06 de Abril 2026'
            });
var format_Del02al22deMarzo2026_10 = new ol.format.GeoJSON();
var features_Del02al22deMarzo2026_10 = format_Del02al22deMarzo2026_10.readFeatures(json_Del02al22deMarzo2026_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del02al22deMarzo2026_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del02al22deMarzo2026_10.addFeatures(features_Del02al22deMarzo2026_10);
var lyr_Del02al22deMarzo2026_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del02al22deMarzo2026_10, 
                style: style_Del02al22deMarzo2026_10,
                popuplayertitle: 'Del 02 al 22 de Marzo 2026',
                interactive: true,
                title: '<img src="styles/legend/Del02al22deMarzo2026_10.png" /> Del 02 al 22 de Marzo 2026'
            });
var format_Del16deFebreroal01deMarzo2026_11 = new ol.format.GeoJSON();
var features_Del16deFebreroal01deMarzo2026_11 = format_Del16deFebreroal01deMarzo2026_11.readFeatures(json_Del16deFebreroal01deMarzo2026_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del16deFebreroal01deMarzo2026_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del16deFebreroal01deMarzo2026_11.addFeatures(features_Del16deFebreroal01deMarzo2026_11);
var lyr_Del16deFebreroal01deMarzo2026_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del16deFebreroal01deMarzo2026_11, 
                style: style_Del16deFebreroal01deMarzo2026_11,
                popuplayertitle: 'Del 16 de Febrero al 01 de Marzo 2026',
                interactive: true,
                title: '<img src="styles/legend/Del16deFebreroal01deMarzo2026_11.png" /> Del 16 de Febrero al 01 de Marzo 2026'
            });
var format_Del29deEneroal15deFebrero2026_12 = new ol.format.GeoJSON();
var features_Del29deEneroal15deFebrero2026_12 = format_Del29deEneroal15deFebrero2026_12.readFeatures(json_Del29deEneroal15deFebrero2026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del29deEneroal15deFebrero2026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del29deEneroal15deFebrero2026_12.addFeatures(features_Del29deEneroal15deFebrero2026_12);
var lyr_Del29deEneroal15deFebrero2026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del29deEneroal15deFebrero2026_12, 
                style: style_Del29deEneroal15deFebrero2026_12,
                popuplayertitle: 'Del 29 de Enero al 15 de Febrero 2026',
                interactive: true,
                title: '<img src="styles/legend/Del29deEneroal15deFebrero2026_12.png" /> Del 29 de Enero al 15 de Febrero 2026'
            });
var format_Del15al28deEnero2026_13 = new ol.format.GeoJSON();
var features_Del15al28deEnero2026_13 = format_Del15al28deEnero2026_13.readFeatures(json_Del15al28deEnero2026_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Del15al28deEnero2026_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Del15al28deEnero2026_13.addFeatures(features_Del15al28deEnero2026_13);
var lyr_Del15al28deEnero2026_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Del15al28deEnero2026_13, 
                style: style_Del15al28deEnero2026_13,
                popuplayertitle: 'Del 15 al 28 de Enero 2026',
                interactive: true,
                title: '<img src="styles/legend/Del15al28deEnero2026_13.png" /> Del 15 al 28 de Enero 2026'
            });
var group_SatlitePliadesNEO30cm = new ol.layer.Group({
                                layers: [lyr_Del07al19deAbril2026_8,lyr_Del23deMarzoal06deAbril2026_9,lyr_Del02al22deMarzo2026_10,lyr_Del16deFebreroal01deMarzo2026_11,lyr_Del29deEneroal15deFebrero2026_12,lyr_Del15al28deEnero2026_13,],
                                fold: 'close',
                                title: 'Satélite Pléiades NEO (30cm)'});
var group_SatlitePliades50cm = new ol.layer.Group({
                                layers: [lyr_Del07al19deAbril2026_2,lyr_Del23deMarzoal06deAbril2026_3,lyr_Del02al22deMarzo2026_4,lyr_Del16deFebreroal01deMarzo2026_5,lyr_Del29deEneroal15deFebrero2026_6,lyr_Del15al28deEnero2026_7,],
                                fold: 'close',
                                title: 'Satélite Pléiades (50cm)'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRITopo_1.setVisible(true);lyr_Del07al19deAbril2026_2.setVisible(true);lyr_Del23deMarzoal06deAbril2026_3.setVisible(true);lyr_Del02al22deMarzo2026_4.setVisible(true);lyr_Del16deFebreroal01deMarzo2026_5.setVisible(true);lyr_Del29deEneroal15deFebrero2026_6.setVisible(true);lyr_Del15al28deEnero2026_7.setVisible(true);lyr_Del07al19deAbril2026_8.setVisible(true);lyr_Del23deMarzoal06deAbril2026_9.setVisible(true);lyr_Del02al22deMarzo2026_10.setVisible(true);lyr_Del16deFebreroal01deMarzo2026_11.setVisible(true);lyr_Del29deEneroal15deFebrero2026_12.setVisible(true);lyr_Del15al28deEnero2026_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRITopo_1,group_SatlitePliades50cm,group_SatlitePliadesNEO30cm];
lyr_Del07al19deAbril2026_2.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del23deMarzoal06deAbril2026_3.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del02al22deMarzo2026_4.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del16deFebreroal01deMarzo2026_5.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del29deEneroal15deFebrero2026_6.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del15al28deEnero2026_7.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del07al19deAbril2026_8.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del23deMarzoal06deAbril2026_9.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del02al22deMarzo2026_10.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del16deFebreroal01deMarzo2026_11.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del29deEneroal15deFebrero2026_12.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del15al28deEnero2026_13.set('fieldAliases', {'Deliv_date': 'Deliv_date', 'Datastrip': 'Datastrip', 'Datacq': 'Datacq', 'Fecha_adqu': 'Fecha_adqu', 'Hora_adqui': 'Hora_adqui', });
lyr_Del07al19deAbril2026_2.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del23deMarzoal06deAbril2026_3.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del02al22deMarzo2026_4.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del16deFebreroal01deMarzo2026_5.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del29deEneroal15deFebrero2026_6.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del15al28deEnero2026_7.set('fieldImages', {'Deliv_date': 'TextEdit', 'Datastrip': 'TextEdit', 'Datacq': 'TextEdit', 'Fecha_adqu': 'DateTime', 'Hora_adqui': 'TextEdit', });
lyr_Del07al19deAbril2026_8.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del23deMarzoal06deAbril2026_9.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del02al22deMarzo2026_10.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del16deFebreroal01deMarzo2026_11.set('fieldImages', {'Deliv_date': '', 'Datastrip': '', 'Datacq': '', 'Fecha_adqu': '', 'Hora_adqui': '', });
lyr_Del29deEneroal15deFebrero2026_12.set('fieldImages', {'Deliv_date': 'TextEdit', 'Datastrip': 'TextEdit', 'Datacq': 'TextEdit', 'Fecha_adqu': 'DateTime', 'Hora_adqui': 'TextEdit', });
lyr_Del15al28deEnero2026_13.set('fieldImages', {'Deliv_date': 'TextEdit', 'Datastrip': 'TextEdit', 'Datacq': 'TextEdit', 'Fecha_adqu': 'DateTime', 'Hora_adqui': 'TextEdit', });
lyr_Del07al19deAbril2026_2.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del23deMarzoal06deAbril2026_3.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del02al22deMarzo2026_4.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del16deFebreroal01deMarzo2026_5.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del29deEneroal15deFebrero2026_6.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del15al28deEnero2026_7.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del07al19deAbril2026_8.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del23deMarzoal06deAbril2026_9.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del02al22deMarzo2026_10.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del16deFebreroal01deMarzo2026_11.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del29deEneroal15deFebrero2026_12.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del15al28deEnero2026_13.set('fieldLabels', {'Deliv_date': 'inline label - visible with data', 'Datastrip': 'inline label - visible with data', 'Datacq': 'inline label - visible with data', 'Fecha_adqu': 'inline label - visible with data', 'Hora_adqui': 'inline label - visible with data', });
lyr_Del15al28deEnero2026_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});