var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PLIS_ATE_1 = new ol.format.GeoJSON();
var features_PLIS_ATE_1 = format_PLIS_ATE_1.readFeatures(json_PLIS_ATE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLIS_ATE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLIS_ATE_1.addFeatures(features_PLIS_ATE_1);
var lyr_PLIS_ATE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLIS_ATE_1, 
                style: style_PLIS_ATE_1,
                popuplayertitle: "PLIS_ATE",
                interactive: true,
    title: 'PLIS_ATE<br />\
    <img src="styles/legend/PLIS_ATE_1_0.png" /> Bosco del Rugareto<br />\
    <img src="styles/legend/PLIS_ATE_1_1.png" /> Parco dei Mughetti<br />\
    <img src="styles/legend/PLIS_ATE_1_2.png" /> Parco dei Mulini<br />\
    <img src="styles/legend/PLIS_ATE_1_3.png" /> Parco del Basso Olona<br />\
    <img src="styles/legend/PLIS_ATE_1_4.png" /> Parco del Medio Olona<br />\
    <img src="styles/legend/PLIS_ATE_1_5.png" /> Parco del Roccolo<br />\
    <img src="styles/legend/PLIS_ATE_1_6.png" /> Parco Primo Maggio<br />\
    <img src="styles/legend/PLIS_ATE_1_7.png" /> Parco Rile Tenore Olona<br />\
    <img src="styles/legend/PLIS_ATE_1_8.png" /> Parco Valle del Lanza<br />\
    <img src="styles/legend/PLIS_ATE_1_9.png" /> <br />'
        });
var format_parchi_regionali_2 = new ol.format.GeoJSON();
var features_parchi_regionali_2 = format_parchi_regionali_2.readFeatures(json_parchi_regionali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parchi_regionali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parchi_regionali_2.addFeatures(features_parchi_regionali_2);
var lyr_parchi_regionali_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parchi_regionali_2, 
                style: style_parchi_regionali_2,
                popuplayertitle: "parchi_regionali",
                interactive: true,
                title: '<img src="styles/legend/parchi_regionali_2.png" /> parchi_regionali'
            });
var format_ZSCpineta_3 = new ol.format.GeoJSON();
var features_ZSCpineta_3 = format_ZSCpineta_3.readFeatures(json_ZSCpineta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZSCpineta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSCpineta_3.addFeatures(features_ZSCpineta_3);
var lyr_ZSCpineta_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSCpineta_3, 
                style: style_ZSCpineta_3,
                popuplayertitle: "ZSCpineta",
                interactive: true,
                title: '<img src="styles/legend/ZSCpineta_3.png" /> ZSCpineta'
            });
var format_comuni_ATE_4 = new ol.format.GeoJSON();
var features_comuni_ATE_4 = format_comuni_ATE_4.readFeatures(json_comuni_ATE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comuni_ATE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comuni_ATE_4.addFeatures(features_comuni_ATE_4);
var lyr_comuni_ATE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comuni_ATE_4, 
                style: style_comuni_ATE_4,
                popuplayertitle: "comuni_ATE",
                interactive: true,
                title: '<img src="styles/legend/comuni_ATE_4.png" /> comuni_ATE'
            });
var format_confini_ATE_insubria_olona_5 = new ol.format.GeoJSON();
var features_confini_ATE_insubria_olona_5 = format_confini_ATE_insubria_olona_5.readFeatures(json_confini_ATE_insubria_olona_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confini_ATE_insubria_olona_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confini_ATE_insubria_olona_5.addFeatures(features_confini_ATE_insubria_olona_5);
var lyr_confini_ATE_insubria_olona_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_confini_ATE_insubria_olona_5, 
                style: style_confini_ATE_insubria_olona_5,
                popuplayertitle: "confini_ATE_insubria_olona",
                interactive: true,
                title: '<img src="styles/legend/confini_ATE_insubria_olona_5.png" /> confini_ATE_insubria_olona'
            });
var format_monument_naturali_6 = new ol.format.GeoJSON();
var features_monument_naturali_6 = format_monument_naturali_6.readFeatures(json_monument_naturali_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_monument_naturali_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_monument_naturali_6.addFeatures(features_monument_naturali_6);
var lyr_monument_naturali_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_monument_naturali_6, 
                style: style_monument_naturali_6,
                popuplayertitle: "monument_naturali",
                interactive: true,
                title: '<img src="styles/legend/monument_naturali_6.png" /> monument_naturali'
            });
var format_Pratidonatori_7 = new ol.format.GeoJSON();
var features_Pratidonatori_7 = format_Pratidonatori_7.readFeatures(json_Pratidonatori_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pratidonatori_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pratidonatori_7.addFeatures(features_Pratidonatori_7);
var lyr_Pratidonatori_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pratidonatori_7, 
                style: style_Pratidonatori_7,
                popuplayertitle: "Prati donatori",
                interactive: true,
                title: '<img src="styles/legend/Pratidonatori_7.png" /> Prati donatori'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PLIS_ATE_1.setVisible(false);lyr_parchi_regionali_2.setVisible(false);lyr_ZSCpineta_3.setVisible(false);lyr_comuni_ATE_4.setVisible(false);lyr_confini_ATE_insubria_olona_5.setVisible(true);lyr_monument_naturali_6.setVisible(false);lyr_Pratidonatori_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PLIS_ATE_1,lyr_parchi_regionali_2,lyr_ZSCpineta_3,lyr_comuni_ATE_4,lyr_confini_ATE_insubria_olona_5,lyr_monument_naturali_6,lyr_Pratidonatori_7];
lyr_PLIS_ATE_1.set('fieldAliases', {'fid': 'fid', 'COD_PLIS': 'COD_PLIS', 'ATTO_RIC': 'ATTO_RIC', 'DATA_RIC': 'DATA_RIC', 'TIPO_CA': 'TIPO_CA', 'DTIPO_CA': 'DTIPO_CA', 'SCALA_CA': 'SCALA_CA', 'ATTO_ULTIM': 'ATTO_ULTIM', 'DATA_ULTIM': 'DATA_ULTIM', 'TIPO_PLIS': 'TIPO_PLIS', 'DTIPO_PLIS': 'DTIPO_PLIS', 'NOME_PLIS': 'NOME_PLIS', 'ENTE_PLIS': 'ENTE_PLIS', 'IND_ENTE': 'IND_ENTE', 'NUM_PAL': 'NUM_PAL', 'AREA_ATTO': 'AREA_ATTO', 'NOTE_PLIS': 'NOTE_PLIS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'area ha': 'area ha', });
lyr_parchi_regionali_2.set('fieldAliases', {'fid': 'fid', 'COD_PA': 'COD_PA', 'TIPO_IDE': 'TIPO_IDE', 'DTIPO_IDE': 'DTIPO_IDE', 'IIDENT': 'IIDENT', 'DATA_I': 'DATA_I', 'LIV_AP': 'LIV_AP', 'DLIV_AP': 'DLIV_AP', 'NOME_PA': 'NOME_PA', 'COD_ENTE': 'COD_ENTE', 'NOME_ENTE': 'NOME_ENTE', 'SEDE_ENTE': 'SEDE_ENTE', 'ATTUA_PA': 'ATTUA_PA', 'DATTUA_PA': 'DATTUA_PA', 'COD_PAN': 'COD_PAN', 'NOTEPA': 'NOTEPA', 'OBJECTID_A': 'OBJECTID_A', 'OBJECTID_L': 'OBJECTID_L', 'area ha': 'area ha', });
lyr_ZSCpineta_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'cod_sic': 'cod_sic', 'nome_sic': 'nome_sic', 'reg_biogeo': 'reg_biogeo', 'dregbiogeo': 'dregbiogeo', 'cod_inc': 'cod_inc', 'dcod_inc': 'dcod_inc', 'tipo_atto': 'tipo_atto', 'dtipo_atto': 'dtipo_atto', 'atto_ente': 'atto_ente', 'data_atto': 'data_atto', 'tipo_sito': 'tipo_sito', 'dtipo_sito': 'dtipo_sito', 'attua_sic': 'attua_sic', 'dattua_sic': 'dattua_sic', 'piano_n': 'piano_n', 'piano_d': 'piano_d', 'attua_mis': 'attua_mis', 'dattua_mis': 'dattua_mis', 'mis_n': 'mis_n', 'mis_d': 'mis_d', 'attua_zsc': 'attua_zsc', 'dattua_zsc': 'dattua_zsc', 'zsc_n': 'zsc_n', 'zsc_d': 'zsc_d', 'note': 'note', 'scheda_sic': 'scheda_sic', 'natura2000': 'natura2000', 'codmio': 'codmio', });
lyr_comuni_ATE_4.set('fieldAliases', {'fid': 'fid', 'CLASSREF': 'CLASSREF', 'BELFIORE': 'BELFIORE', 'COD_ISTATN': 'COD_ISTATN', 'NOME_COM': 'NOME_COM', 'COD_PRO': 'COD_PRO', 'NOME_PRO': 'NOME_PRO', 'SIG_PRO': 'SIG_PRO', 'COD_CMO': 'COD_CMO', 'NOME_CMO': 'NOME_CMO', 'COD_ASL': 'COD_ASL', 'NOME_ASL': 'NOME_ASL', 'COD_REG': 'COD_REG', 'NOME_REG': 'NOME_REG', 'ANNO': 'ANNO', 'ISTAT': 'ISTAT', 'LEGGE_ISTI': 'LEGGE_ISTI', 'ATS_COD': 'ATS_COD', 'ATS_DEC': 'ATS_DEC', 'CMETR_COD': 'CMETR_COD', 'CMETR_DEC': 'CMETR_DEC', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_confini_ATE_insubria_olona_5.set('fieldAliases', {'fid': 'fid', 'ATE': 'ATE', 'OBJECTI': 'OBJECTI', 'AREA': 'AREA', 'PERIMET': 'PERIMET', 'STRATO_': 'STRATO_', 'DSTRATO': 'DSTRATO', 'COD_ISTAT': 'COD_ISTAT', 'NOME_CO': 'NOME_CO', 'COD_ISTATN': 'COD_ISTATN', 'COD_PRO': 'COD_PRO', 'NOME_PR': 'NOME_PR', 'SIG_PRO': 'SIG_PRO', 'COD_REG': 'COD_REG', 'NOME_RE': 'NOME_RE', 'COD_CMO': 'COD_CMO', 'NOME_CM': 'NOME_CM', 'COD_ASL': 'COD_ASL', 'NOME_AS': 'NOME_AS', 'PdPdAGeT': 'PdPdAGeT', 'Pdll\'AN': 'Pdll\'AN', 'PrcdlMB': 'PrcdlMB', 'PrcdVdL': 'PrcdVdL', 'PrcdllG': 'PrcdllG', 'PrcdlOV': 'PrcdlOV', 'PdMedVdC': 'PdMedVdC', 'PrldVdT': 'PrldVdT', 'PrcNrdM': 'PrcNrdM', 'PrcSpnV': 'PrcSpnV', 'PrcCmdF': 'PrcCmdF', 'PrcdlGS': 'PrcdlGS', 'distanz': 'distanz', 'ate_2': 'ate_2', 'area_Cri': 'area_Cri', });
lyr_monument_naturali_6.set('fieldAliases', {'fid': 'fid', 'COD_MN': 'COD_MN', 'NOME_MN': 'NOME_MN', 'IND_MN': 'IND_MN', 'IDENT': 'IDENT', 'COD_ENTE': 'COD_ENTE', 'NOME_ENTE': 'NOME_ENTE', 'SEDE_ENTE': 'SEDE_ENTE', 'APPR_N': 'APPR_N', 'COD_PA': 'COD_PA', 'COD_PAN': 'COD_PAN', 'CD_RS': 'CD_RS', 'ATTUA_MN': 'ATTUA_MN', 'PIANO_N': 'PIANO_N', 'PIANO_D': 'PIANO_D', 'APPR_D': 'APPR_D', 'DATA_I': 'DATA_I', 'NOTE_MN': 'NOTE_MN', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'area ha': 'area ha', });
lyr_Pratidonatori_7.set('fieldAliases', {'fid': 'fid', 'codice': 'codice', 'comune': 'comune', 'parco': 'parco', 'tipo inter': 'tipo inter', 'area': 'area', });
lyr_PLIS_ATE_1.set('fieldImages', {'fid': 'TextEdit', 'COD_PLIS': 'TextEdit', 'ATTO_RIC': 'TextEdit', 'DATA_RIC': 'DateTime', 'TIPO_CA': 'Range', 'DTIPO_CA': 'TextEdit', 'SCALA_CA': 'TextEdit', 'ATTO_ULTIM': 'TextEdit', 'DATA_ULTIM': 'DateTime', 'TIPO_PLIS': 'Range', 'DTIPO_PLIS': 'TextEdit', 'NOME_PLIS': 'TextEdit', 'ENTE_PLIS': 'TextEdit', 'IND_ENTE': 'TextEdit', 'NUM_PAL': 'Range', 'AREA_ATTO': 'TextEdit', 'NOTE_PLIS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'area ha': 'TextEdit', });
lyr_parchi_regionali_2.set('fieldImages', {'fid': 'TextEdit', 'COD_PA': 'Range', 'TIPO_IDE': 'Range', 'DTIPO_IDE': 'TextEdit', 'IIDENT': 'TextEdit', 'DATA_I': 'DateTime', 'LIV_AP': 'Range', 'DLIV_AP': 'TextEdit', 'NOME_PA': 'TextEdit', 'COD_ENTE': 'Range', 'NOME_ENTE': 'TextEdit', 'SEDE_ENTE': 'TextEdit', 'ATTUA_PA': 'Range', 'DATTUA_PA': 'TextEdit', 'COD_PAN': 'Range', 'NOTEPA': 'TextEdit', 'OBJECTID_A': 'TextEdit', 'OBJECTID_L': 'TextEdit', 'area ha': 'TextEdit', });
lyr_ZSCpineta_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'cod_sic': 'TextEdit', 'nome_sic': 'TextEdit', 'reg_biogeo': 'TextEdit', 'dregbiogeo': 'TextEdit', 'cod_inc': 'TextEdit', 'dcod_inc': 'TextEdit', 'tipo_atto': 'Range', 'dtipo_atto': 'TextEdit', 'atto_ente': 'TextEdit', 'data_atto': 'TextEdit', 'tipo_sito': 'TextEdit', 'dtipo_sito': 'TextEdit', 'attua_sic': 'Range', 'dattua_sic': 'TextEdit', 'piano_n': 'TextEdit', 'piano_d': 'TextEdit', 'attua_mis': 'Range', 'dattua_mis': 'TextEdit', 'mis_n': 'TextEdit', 'mis_d': 'TextEdit', 'attua_zsc': 'Range', 'dattua_zsc': 'TextEdit', 'zsc_n': 'TextEdit', 'zsc_d': 'TextEdit', 'note': 'TextEdit', 'scheda_sic': 'TextEdit', 'natura2000': 'TextEdit', 'codmio': 'TextEdit', });
lyr_comuni_ATE_4.set('fieldImages', {'fid': 'TextEdit', 'CLASSREF': 'TextEdit', 'BELFIORE': 'TextEdit', 'COD_ISTATN': 'TextEdit', 'NOME_COM': 'TextEdit', 'COD_PRO': 'Range', 'NOME_PRO': 'TextEdit', 'SIG_PRO': 'TextEdit', 'COD_CMO': 'TextEdit', 'NOME_CMO': 'TextEdit', 'COD_ASL': 'TextEdit', 'NOME_ASL': 'TextEdit', 'COD_REG': 'TextEdit', 'NOME_REG': 'TextEdit', 'ANNO': 'Range', 'ISTAT': 'TextEdit', 'LEGGE_ISTI': 'TextEdit', 'ATS_COD': 'TextEdit', 'ATS_DEC': 'TextEdit', 'CMETR_COD': 'TextEdit', 'CMETR_DEC': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_confini_ATE_insubria_olona_5.set('fieldImages', {'fid': 'TextEdit', 'ATE': 'TextEdit', 'OBJECTI': 'TextEdit', 'AREA': 'TextEdit', 'PERIMET': 'TextEdit', 'STRATO_': 'TextEdit', 'DSTRATO': 'TextEdit', 'COD_ISTAT': 'TextEdit', 'NOME_CO': 'TextEdit', 'COD_ISTATN': 'TextEdit', 'COD_PRO': 'Range', 'NOME_PR': 'TextEdit', 'SIG_PRO': 'TextEdit', 'COD_REG': 'TextEdit', 'NOME_RE': 'TextEdit', 'COD_CMO': 'TextEdit', 'NOME_CM': 'TextEdit', 'COD_ASL': 'Range', 'NOME_AS': 'TextEdit', 'PdPdAGeT': 'TextEdit', 'Pdll\'AN': 'TextEdit', 'PrcdlMB': 'TextEdit', 'PrcdVdL': 'TextEdit', 'PrcdllG': 'TextEdit', 'PrcdlOV': 'TextEdit', 'PdMedVdC': 'TextEdit', 'PrldVdT': 'TextEdit', 'PrcNrdM': 'TextEdit', 'PrcSpnV': 'TextEdit', 'PrcCmdF': 'TextEdit', 'PrcdlGS': 'TextEdit', 'distanz': 'Range', 'ate_2': 'TextEdit', 'area_Cri': 'TextEdit', });
lyr_monument_naturali_6.set('fieldImages', {'fid': 'Hidden', 'COD_MN': 'Hidden', 'NOME_MN': 'TextEdit', 'IND_MN': 'Hidden', 'IDENT': 'Hidden', 'COD_ENTE': 'Hidden', 'NOME_ENTE': 'Hidden', 'SEDE_ENTE': 'Hidden', 'APPR_N': 'Hidden', 'COD_PA': 'Hidden', 'COD_PAN': 'Hidden', 'CD_RS': 'Hidden', 'ATTUA_MN': 'Hidden', 'PIANO_N': 'Hidden', 'PIANO_D': 'Hidden', 'APPR_D': 'Hidden', 'DATA_I': 'Hidden', 'NOTE_MN': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'area ha': 'TextEdit', });
lyr_Pratidonatori_7.set('fieldImages', {'fid': 'Hidden', 'codice': 'TextEdit', 'comune': 'TextEdit', 'parco': 'TextEdit', 'tipo inter': 'Hidden', 'area': 'TextEdit', });
lyr_PLIS_ATE_1.set('fieldLabels', {'fid': 'no label', 'COD_PLIS': 'no label', 'ATTO_RIC': 'no label', 'DATA_RIC': 'no label', 'TIPO_CA': 'no label', 'DTIPO_CA': 'no label', 'SCALA_CA': 'no label', 'ATTO_ULTIM': 'no label', 'DATA_ULTIM': 'no label', 'TIPO_PLIS': 'no label', 'DTIPO_PLIS': 'no label', 'NOME_PLIS': 'inline label - visible with data', 'ENTE_PLIS': 'no label', 'IND_ENTE': 'no label', 'NUM_PAL': 'no label', 'AREA_ATTO': 'no label', 'NOTE_PLIS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'area ha': 'no label', });
lyr_parchi_regionali_2.set('fieldLabels', {'fid': 'no label', 'COD_PA': 'no label', 'TIPO_IDE': 'no label', 'DTIPO_IDE': 'no label', 'IIDENT': 'no label', 'DATA_I': 'no label', 'LIV_AP': 'no label', 'DLIV_AP': 'no label', 'NOME_PA': 'no label', 'COD_ENTE': 'no label', 'NOME_ENTE': 'no label', 'SEDE_ENTE': 'no label', 'ATTUA_PA': 'no label', 'DATTUA_PA': 'no label', 'COD_PAN': 'no label', 'NOTEPA': 'no label', 'OBJECTID_A': 'no label', 'OBJECTID_L': 'no label', 'area ha': 'no label', });
lyr_ZSCpineta_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'cod_sic': 'no label', 'nome_sic': 'no label', 'reg_biogeo': 'no label', 'dregbiogeo': 'no label', 'cod_inc': 'no label', 'dcod_inc': 'no label', 'tipo_atto': 'no label', 'dtipo_atto': 'no label', 'atto_ente': 'no label', 'data_atto': 'no label', 'tipo_sito': 'no label', 'dtipo_sito': 'no label', 'attua_sic': 'no label', 'dattua_sic': 'no label', 'piano_n': 'no label', 'piano_d': 'no label', 'attua_mis': 'no label', 'dattua_mis': 'no label', 'mis_n': 'no label', 'mis_d': 'no label', 'attua_zsc': 'no label', 'dattua_zsc': 'no label', 'zsc_n': 'no label', 'zsc_d': 'no label', 'note': 'no label', 'scheda_sic': 'no label', 'natura2000': 'no label', 'codmio': 'no label', });
lyr_comuni_ATE_4.set('fieldLabels', {'fid': 'no label', 'CLASSREF': 'no label', 'BELFIORE': 'no label', 'COD_ISTATN': 'no label', 'NOME_COM': 'inline label - always visible', 'COD_PRO': 'no label', 'NOME_PRO': 'no label', 'SIG_PRO': 'no label', 'COD_CMO': 'no label', 'NOME_CMO': 'no label', 'COD_ASL': 'no label', 'NOME_ASL': 'no label', 'COD_REG': 'no label', 'NOME_REG': 'no label', 'ANNO': 'no label', 'ISTAT': 'no label', 'LEGGE_ISTI': 'no label', 'ATS_COD': 'no label', 'ATS_DEC': 'no label', 'CMETR_COD': 'no label', 'CMETR_DEC': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_confini_ATE_insubria_olona_5.set('fieldLabels', {'fid': 'no label', 'ATE': 'no label', 'OBJECTI': 'no label', 'AREA': 'no label', 'PERIMET': 'no label', 'STRATO_': 'no label', 'DSTRATO': 'no label', 'COD_ISTAT': 'no label', 'NOME_CO': 'no label', 'COD_ISTATN': 'no label', 'COD_PRO': 'no label', 'NOME_PR': 'no label', 'SIG_PRO': 'no label', 'COD_REG': 'no label', 'NOME_RE': 'no label', 'COD_CMO': 'no label', 'NOME_CM': 'no label', 'COD_ASL': 'no label', 'NOME_AS': 'no label', 'PdPdAGeT': 'no label', 'Pdll\'AN': 'no label', 'PrcdlMB': 'no label', 'PrcdVdL': 'no label', 'PrcdllG': 'no label', 'PrcdlOV': 'no label', 'PdMedVdC': 'no label', 'PrldVdT': 'no label', 'PrcNrdM': 'no label', 'PrcSpnV': 'no label', 'PrcCmdF': 'no label', 'PrcdlGS': 'no label', 'distanz': 'no label', 'ate_2': 'no label', 'area_Cri': 'no label', });
lyr_monument_naturali_6.set('fieldLabels', {'NOME_MN': 'no label', 'area ha': 'no label', });
lyr_Pratidonatori_7.set('fieldLabels', {'codice': 'header label - always visible', 'comune': 'inline label - visible with data', 'parco': 'header label - visible with data', 'area': 'no label', });
lyr_Pratidonatori_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});