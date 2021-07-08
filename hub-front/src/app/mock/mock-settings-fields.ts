
import { Field } from '../interfaces/field';

export const SETTINGS_FIELDS: Field[] = [
  // { id: 1, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "settings",
  //     "param" : "type",
  //     "field_name": "data_source",
  //     "field_label": "Data Source",
  //     "config_field_name":"",
  //     "field_help": "",
  //     "field_order": 1,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select",
  //     "group":"Settings",
  //     "options": {
  //         "values": [
  //             'Excel',
  //             'csv'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 2, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "settings",
  //     "param" : "data_structure",
  //     "field_name": "data_structure",
  //     "field_label": "Data Structure",
  //     "config_field_name":"",
  //     "field_help": "",
  //     "field_order": 1,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select",
  //     "group":"Settings",
  //     "options": {
  //         "values": [
  //             'Multiple sensors per row',
  //             'One Sensor per row'
  //         ]
  //       },
  //     }
  //   }
  // },
  { id: 3, 
    datavalue:'', 
    field:{
      "model" : "settings",
      "param" : "source",
      "field_name": "upload_data",
      "field_label": "Upload Data",
      "config_field_name":"",
      "field_help": "",
      "field_order": 3,
      "field_placeholder": "",
      "is_editable": true,
      "is_custom": false,
      "is_required": true,
      "is_listed": false,
      "component":{
      "name": "file_upload",
      "group":"Settings",
      "options": {
        },
      }
    }
  },
  // { id: 4, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Things",
  //     "param" : "name_of_thing",
  //     "field_name": "name_of_thing",
  //     "field_label": "Name of Thing",
  //     "config_field_name":"name",
  //     "field_help": "",
  //     "field_order": 1,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Things",
  //     "options": {
  //         "values": [
  //             'From Data Source',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 5, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Things",
  //     "param" : "description",
  //     "field_name": "description",
  //     "field_label": "Description",
  //     "config_field_name":"description",
  //     "field_help": "",
  //     "field_order": 2,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Things",
  //     "options": {
  //         "values": [
  //             'From Data Source',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 6, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Locations",
  //     "param" : "iot",
  //     "field_name": "iot",
  //     "field_label": "@iot",
  //     "config_field_name":"@iot",
  //     "field_help": "",
  //     "field_order": 1,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Things",
  //     "options": {
  //         "values": [
  //             'Autogenerated',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 7, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Locations",
  //     "param" : "iot",
  //     "field_name": "iot",
  //     "field_label": "@iot",
  //     "config_field_name":"@iot",
  //     "field_help": "",
  //     "field_order": 1,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select",
  //     "group":"Location",
  //     "options": {
  //         "values": [
  //             'Autogenerated',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 8, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Locations",
  //     "param" : "location_name",
  //     "field_name": "location_name",
  //     "field_label": "Location Name",
  //     "config_field_name":"name",
  //     "field_help": "",
  //     "field_order": 2,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Location",
  //     "options": {
  //         "values": [
  //             'From Data Source',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 9, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Locations",
  //     "param" : "lat",
  //     "field_name": "lat",
  //     "field_label": "Lattitude",
  //     "config_field_name":"",
  //     "field_help": "",
  //     "field_order": 3,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Location",
  //     "options": {
  //         "values": [
  //             'From Data Source',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // },
  // { id: 10, 
  //   datavalue:'', 
  //   field:{
  //     "model" : "Locations",
  //     "param" : "lng",
  //     "field_name": "lng",
  //     "field_label": "Longitude",
  //     "config_field_name":"",
  //     "field_help": "",
  //     "field_order": 4,
  //     "field_placeholder": "",
  //     "is_editable": true,
  //     "is_custom": false,
  //     "is_required": true,
  //     "is_listed": false,
  //     "component":{
  //     "name": "select_options",
  //     "group":"Location",
  //     "options": {
  //         "values": [
  //             'From Data Source',
  //             'Custom Text'
  //         ]
  //       },
  //     }
  //   }
  // }
];


