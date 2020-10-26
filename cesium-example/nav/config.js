/**
 * Cesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */


/**
 * key值：为exampleConfig配置的key值或者fileName值 （为中间节点时是key值，叶结点是fileName值）
 * value值：fontawesome字体icon名 
 */
var sideBarIconConfig = {
    "imageryLayer": "fa-photo",
    "feature": "fa-road",
    "gltf": "fa-space-shuttle",
    "3dtiles": "fa-building-o",
    "scene": "fa-globe",
    "analysi": "fa-signal",
    "hangye": "fa-crosshairs",
    "visualization": "fa-street-view",
};


var exampleConfig = {
    "imageryLayer": {
        name: "基础底图",
        content: {
            "imageryLayer-online": {
                name: "在线地图",
                content: [ 
                    {
                        name: "天地图",
                        version: "1.1.0",
                        thumbnail: "11_online_tdt.jpg",
                        fileName: "11_online_tdt"
                    },
                    {
                        name: "谷歌",
                        version: "1.1.0",
                        thumbnail: "11_online_google.jpg",
                        fileName: "11_online_google"
                    },
                    {
                        name: "高德",
                        version: "1.1.0",
                        thumbnail: "11_online_gaode.jpg",
                        fileName: "11_online_gaode"
                    },
                    {
                        name: "百度Demo",
                        version: "1.7.6",
                        thumbnail: "11_online_baidu.jpg",
                        fileName: "11_online_baidu"
                    },
                   
                ]
            },
            "imageryLayer-geshi": {
                name: "自定义格式地图(可离线)",
                content: [ 
                    {
                        name: "xyz金字塔瓦片",
                        version: "1.1.0",
                        thumbnail: "12_layer_xyz.jpg",
                        fileName: "12_layer_xyz"
                    }, 
                      {
                        name: "OGC WMS服务",
                        version: "1.1.0",
                        thumbnail: "12_layer_wms.jpg",
                        fileName: "12_layer_wms"
                    }, {
                        name: "OGC WMTS服务",
                        version: "1.1.0",
                        thumbnail: "12_layer_wmts.jpg",
                        fileName: "12_layer_wmts"
                    }, 
                    {
                        name: "EPSG4490坐标系",
                        version: "1.9.2",
                        thumbnail: "12_layer_4490.jpg",
                        fileName: "12_layer_4490"
                    },
                    
                ]
            },
           
            "imageryLayer-config": {
                name: "通过SDK配置(推荐)",
                content: [
                    {
                        name: "json配置文件",
                        version: "1.0.0",
                        thumbnail: "13_for_config.jpg",
                        fileName: "13_for_config"
                    }, {
                        name: "json文件url动态传参",
                        version: "1.0.0",
                        thumbnail: "13_for_config_url.jpg",
                        fileName: "13_for_config_url",
                        params: "config=config.json"
                    }, {
                        name: "json格式数据",
                        version: "1.0.0",
                        thumbnail: "13_for_config_data.jpg",
                        fileName: "13_for_config_data"
                    }, {
                        name: "与第3方SDK结合使用",
                        version: "2.1.0",
                        thumbnail: "13_otherSDK.jpg",
                        fileName: "13_otherSDK"
                    }

                    
                ]
            },
        }
    },

    "feature": {
        name: "矢量数据",
        content: {
           
            "feature-point": {
                name: "点状对象",
                content: [
                   
                    {
                        name: "动态效果点",
                        version: "1.7.6",
                        thumbnail: "22_point_animation.gif",
                        fileName: "22_point_animation"
                    },
                   
                ]
            },
            "feature-polyline": {
                name: "线状对象",
                content: [ 
                    {
                        name: "动态线",
                        version: "1.6.9",
                        thumbnail: "23_lineFlowMaterial.gif",
                        fileName: "23_lineFlowMaterial"
                    },
                    
                    {
                        name: "动态立体围墙",
                        version: "1.6.9",
                        thumbnail: "23_wall_animation.gif",
                        fileName: "23_wall_animation"
                    },
                    {
                        name: "围墙扩散动画",
                        version: "2.2.0",
                        thumbnail: "24_diffuseWallGlow.gif",
                        fileName: "24_diffuseWallGlow",
                    },
                ]
            },
            
            "feature-other": {
                name: "其他立体状",
                content: [
                   
                    {
                        name: "卫星视锥体",
                        version: "1.8.9",
                        thumbnail: "27_space_satellite.jpg",
                        fileName: "27_space_satellite",
                        plugins: "space",
                    }
                ]
            },
            "feature-geshi": {
                name: "通用格式数据支持",
                content: [
                    {
                        name: "GeoJson (地块)",
                        version: "2.0.5",
                        thumbnail: "28_geojson_mars.jpg",
                        fileName: "28_geojson_mars"
                    },
                    {
                        name: "GeoJson (行政区划)",
                        version: "1.2.0",
                        thumbnail: "28_geojson_mars2.jpg",
                        fileName: "28_geojson_mars2"
                    },
                    
                ]
            },
         
            "feature-edit": {
                name: "编辑及控制",
                content: [
                    {
                        name: "标绘 （绘制文字、点、线、面、立体等）",
                        version: "1.7.6",
                        thumbnail: "29_draw.jpg",
                        fileName: "29_draw"
                    },
                    {
                        name: "军事标绘",
                        version: "1.9.1",
                        thumbnail: "29_draw_pro.jpg",
                        fileName: "29_draw_pro"
                    },
                   
                ]
            }
        }
    },
    "gltf": {
        name: "小模型",
        content: { 
            "gltf-edit": {
                name: "数据编辑控制",
                content: [
                    {
                        name: "标绘模型",
                        version: "1.7.6",
                        thumbnail: "33_draw_gltf.jpg",
                        fileName: "33_draw_gltf",
                    },
                     
                ]
            },
        }
    },
     
    "scene": {
        name: "场景",
        content: {
            "scene-control": {
                name: "控件",
                content: [
                    {
                        name: "Popup鼠标单击信息窗",
                        version: "1.3.0",
                        thumbnail: "41_popup.jpg",
                        fileName: "41_popup"
                    },
                    {
                        name: "Tooltip鼠标移入信息",
                        version: "1.3.0",
                        thumbnail: "41_tooltip.jpg",
                        fileName: "41_tooltip"
                    },
                    {
                        name: "右键菜单",
                        version: "1.8.9",
                        thumbnail: "41_contextmenu.jpg",
                        fileName: "41_contextmenu"
                    },
                    
                ]
            },
     
            "scene-camera": {
                name: "相机及视角",
                content: [
                   
                    {
                        name: "空中漫游",
                        version: "1.8.9",
                        thumbnail: "43_roaming_air.gif",
                        fileName: "43_roaming_air"
                    }, 
                    {
                        name: "行人漫游",
                        version: "2.0.2",
                        thumbnail: "43_roaming_man.jpg",
                        fileName: "43_roaming_man"
                    },
                    {
                        name: "室内漫游",
                        version: "2.2.0",
                        thumbnail: "43_roaming_shinei.jpg",
                        fileName: "43_roaming_shinei"
                    },                    
                    {
                        name: "贴地表表面漫游",
                        version: "1.8.9",
                        thumbnail: "43_roaming_ground.gif",
                        fileName: "43_roaming_ground "
                    },
                    {
                        name: "贴模型表面漫游",
                        version: "2.0.2",
                        thumbnail: "43_roaming_ground2.gif",
                        fileName: "43_roaming_ground2 "
                    },

                  
                    {
                        name: "飞行路线(复杂)",
                        version: "1.6.9",
                        thumbnail: "43_fly_timeinfo.jpg",
                        fileName: "43_fly_timeinfo"
                    },
                   
                ]
            },

            "scene-jiaohu": {
                name: "交互性",
                content: [
                    {
                        name: "鼠标事件简化处理",
                        version: "1.7.6",
                        thumbnail: "44_event.jpg",
                        fileName: "44_event"
                    },
                    
                ]
            },
          
        }
    },
    "analysi": {
        name: "分析",
        content: {
            "analysi": {
                name: "空间分析",
                content: [
                    {
                        name: "量算 (长度、面积、高度、角度)",
                        version: "1.6.9",
                        thumbnail: "61_measure.jpg",
                        fileName: "61_measure"
                    },
                    
                ]
            },
            
           
        }
    },
    "hangye": {
        name: "行业应用",
        content: {
             
            "hangye-sapce": {
                name: "航天卫星",
                content: [
                   
                    {
                        name: "多卫星实时展示",
                        version: "2.0.2",
                        thumbnail: "73_satellite_list.jpg",
                        fileName: "73_satellite_list",
                        plugins: "space",
                    },
                    
                ]
            },
         
        }
    },
   
 

};

 