import React, { Component } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard 
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer 
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                {/* <img className="logo" src="https://img.lovepik.com/element/45006/2391.png_860.png" /> */}
                <img className="logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    // console.log(props);
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

const resList = [
    {
        "info": {
            "id": "603438",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Sector 7",
            "areaName": "Rohini",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-14 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-sector-7-rohini-delhi-603438",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "89571",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "hjokc46njfhv2vzhbzoa",
            "locality": "Rohini",
            "areaName": "Rohini",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "10804",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-14 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-rohini-delhi-89571",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "780417",
            "name": "California Burrito",
            "cloudinaryImageId": "bfc67762fa34dd47250975f3e8131344",
            "locality": "Naharpur",
            "areaName": "Rohini",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental"
            ],
            "avgRating": 4.5,
            "parentId": "1252",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-15 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-naharpur-rohini-delhi-780417",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "40415",
            "name": "Bikanervala",
            "cloudinaryImageId": "bhb6fmjbetmpa2nh3w0t",
            "locality": "Rohini",
            "areaName": "Rohini",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Snacks",
                "Chaat",
                "Sweets"
            ],
            "avgRating": 4.5,
            "parentId": "45936",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-15 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bikanervala-rohini-delhi-40415",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "733714",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "80f040545552605e33eba09f8fa30be9",
            "locality": "Sector 8",
            "areaName": "Rohini",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Fast Food",
                "Pizzas"
            ],
            "avgRating": 3.9,
            "parentId": "60277",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-14 23:58:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chicago-pizza-sector-8-rohini-delhi-733714",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "423775",
            "name": "Dough & Cream",
            "cloudinaryImageId": "ryp5qgrhm2hdshunww2t",
            "locality": "Chaudhary Balbir Singh Marg",
            "areaName": "Paschim Vihar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks",
                "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "11127",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-14 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dough-and-cream-chaudhary-balbir-singh-marg-paschim-vihar-delhi-423775",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "629016",
            "name": "Monginis",
            "cloudinaryImageId": "nbhqyba52qjcirmhw8ag",
            "locality": "Lawrence road",
            "areaName": "Ashok Vihar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "5007",
            "avgRatingString": "4.1",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 8.5,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "8.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-14 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/monginis-lawrence-road-ashok-vihar-delhi-629016",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "10392",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Sector 3",
            "areaName": "Rohini",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-15 04:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "26723",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Sector 3",
            "areaName": "Rohini",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-15 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-a3fd0770-3a0c-4684-83f5-9bdbac1a21dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

// not using keys (not acceptable) <<<< index as key <<<<<<<<<<< unique id (best practice)

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* //Header
        //Body
        //Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);   