import { Dictionary } from '@/types/common'

// Maps message names to message IDs
const messageId: Dictionary<number> = {
  HEARTBEAT: 0,
  SYS_STATUS: 1,
  SYSTEM_TIME: 2,
  PING: 4,
  CHANGE_OPERATOR_CONTROL: 5,
  CHANGE_OPERATOR_CONTROL_ACK: 6,
  AUTH_KEY: 7,
  LINK_NODE_STATUS: 8,
  SET_MODE: 11,
  PARAM_REQUEST_READ: 20,
  PARAM_REQUEST_LIST: 21,
  PARAM_VALUE: 22,
  PARAM_SET: 23,
  GPS_RAW_INT: 24,
  GPS_STATUS: 25,
  SCALED_IMU: 26,
  RAW_IMU: 27,
  RAW_PRESSURE: 28,
  SCALED_PRESSURE: 29,
  ATTITUDE: 30,
  ATTITUDE_QUATERNION: 31,
  LOCAL_POSITION_NED: 32,
  GLOBAL_POSITION_INT: 33,
  RC_CHANNELS_SCALED: 34,
  RC_CHANNELS_RAW: 35,
  SERVO_OUTPUT_RAW: 36,
  MISSION_REQUEST_PARTIAL_LIST: 37,
  MISSION_WRITE_PARTIAL_LIST: 38,
  MISSION_ITEM: 39,
  MISSION_REQUEST: 40,
  MISSION_SET_CURRENT: 41,
  MISSION_CURRENT: 42,
  MISSION_REQUEST_LIST: 43,
  MISSION_COUNT: 44,
  MISSION_CLEAR_ALL: 45,
  MISSION_ITEM_REACHED: 46,
  MISSION_ACK: 47,
  SET_GPS_GLOBAL_ORIGIN: 48,
  GPS_GLOBAL_ORIGIN: 49,
  PARAM_MAP_RC: 50,
  MISSION_REQUEST_INT: 51,
  SAFETY_SET_ALLOWED_AREA: 54,
  SAFETY_ALLOWED_AREA: 55,
  ATTITUDE_QUATERNION_COV: 61,
  NAV_CONTROLLER_OUTPUT: 62,
  GLOBAL_POSITION_INT_COV: 63,
  LOCAL_POSITION_NED_COV: 64,
  RC_CHANNELS: 65,
  REQUEST_DATA_STREAM: 66,
  DATA_STREAM: 67,
  MANUAL_CONTROL: 69,
  RC_CHANNELS_OVERRIDE: 70,
  MISSION_ITEM_INT: 73,
  VFR_HUD: 74,
  COMMAND_INT: 75,
  COMMAND_LONG: 76,
  COMMAND_ACK: 77,
  COMMAND_CANCEL: 80,
  MANUAL_SETPOINT: 81,
  SET_ATTITUDE_TARGET: 82,
  ATTITUDE_TARGET: 83,
  SET_POSITION_TARGET_LOCAL_NED: 84,
  POSITION_TARGET_LOCAL_NED: 85,
  SET_POSITION_TARGET_GLOBAL_INT: 86,
  POSITION_TARGET_GLOBAL_INT: 87,
  LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET: 89,
  HIL_STATE: 90,
  HIL_CONTROLS: 91,
  HIL_RC_INPUTS_RAW: 92,
  HIL_ACTUATOR_CONTROLS: 93,
  OPTICAL_FLOW: 100,
  GLOBAL_VISION_POSITION_ESTIMATE: 101,
  VISION_POSITION_ESTIMATE: 102,
  VISION_SPEED_ESTIMATE: 103,
  VICON_POSITION_ESTIMATE: 104,
  HIGHRES_IMU: 105,
  OPTICAL_FLOW_RAD: 106,
  HIL_SENSOR: 107,
  SIM_STATE: 108,
  RADIO_STATUS: 109,
  FILE_TRANSFER_PROTOCOL: 110,
  TIMESYNC: 111,
  CAMERA_TRIGGER: 112,
  HIL_GPS: 113,
  HIL_OPTICAL_FLOW: 114,
  HIL_STATE_QUATERNION: 115,
  SCALED_IMU2: 116,
  LOG_REQUEST_LIST: 117,
  LOG_ENTRY: 118,
  LOG_REQUEST_DATA: 119,
  LOG_DATA: 120,
  LOG_ERASE: 121,
  LOG_REQUEST_END: 122,
  GPS_INJECT_DATA: 123,
  GPS2_RAW: 124,
  POWER_STATUS: 125,
  SERIAL_CONTROL: 126,
  GPS_RTK: 127,
  GPS2_RTK: 128,
  SCALED_IMU3: 129,
  DATA_TRANSMISSION_HANDSHAKE: 130,
  ENCAPSULATED_DATA: 131,
  DISTANCE_SENSOR: 132,
  TERRAIN_REQUEST: 133,
  TERRAIN_DATA: 134,
  TERRAIN_CHECK: 135,
  TERRAIN_REPORT: 136,
  SCALED_PRESSURE2: 137,
  ATT_POS_MOCAP: 138,
  SET_ACTUATOR_CONTROL_TARGET: 139,
  ACTUATOR_CONTROL_TARGET: 140,
  ALTITUDE: 141,
  RESOURCE_REQUEST: 142,
  SCALED_PRESSURE3: 143,
  FOLLOW_TARGET: 144,
  CONTROL_SYSTEM_STATE: 146,
  BATTERY_STATUS: 147,
  AUTOPILOT_VERSION: 148,
  LANDING_TARGET: 149,
  SENSOR_OFFSETS: 150,
  SET_MAG_OFFSETS: 151,
  MEMINFO: 152,
  AP_ADC: 153,
  DIGICAM_CONFIGURE: 154,
  DIGICAM_CONTROL: 155,
  MOUNT_CONFIGURE: 156,
  MOUNT_CONTROL: 157,
  MOUNT_STATUS: 158,
  FENCE_POINT: 160,
  FENCE_FETCH_POINT: 161,
  FENCE_STATUS: 162,
  AHRS: 163,
  SIMSTATE: 164,
  HWSTATUS: 165,
  RADIO: 166,
  LIMITS_STATUS: 167,
  WIND: 168,
  DATA16: 169,
  DATA32: 170,
  DATA64: 171,
  DATA96: 172,
  RANGEFINDER: 173,
  AIRSPEED_AUTOCAL: 174,
  RALLY_POINT: 175,
  RALLY_FETCH_POINT: 176,
  COMPASSMOT_STATUS: 177,
  AHRS2: 178,
  CAMERA_STATUS: 179,
  CAMERA_FEEDBACK: 180,
  BATTERY2: 181,
  AHRS3: 182,
  AUTOPILOT_VERSION_REQUEST: 183,
  REMOTE_LOG_DATA_BLOCK: 184,
  REMOTE_LOG_BLOCK_STATUS: 185,
  LED_CONTROL: 186,
  MAG_CAL_PROGRESS: 191,
  MAG_CAL_REPORT: 192,
  EKF_STATUS_REPORT: 193,
  PID_TUNING: 194,
  DEEPSTALL: 195,
  GIMBAL_REPORT: 200,
  GIMBAL_CONTROL: 201,
  GIMBAL_TORQUE_CMD_REPORT: 214,
  GOPRO_HEARTBEAT: 215,
  GOPRO_GET_REQUEST: 216,
  GOPRO_GET_RESPONSE: 217,
  GOPRO_SET_REQUEST: 218,
  GOPRO_SET_RESPONSE: 219,
  EFI_STATUS: 225,
  RPM: 226,
  ESTIMATOR_STATUS: 230,
  WIND_COV: 231,
  GPS_INPUT: 232,
  GPS_RTCM_DATA: 233,
  HIGH_LATENCY: 234,
  HIGH_LATENCY2: 235,
  VIBRATION: 241,
  HOME_POSITION: 242,
  SET_HOME_POSITION: 243,
  MESSAGE_INTERVAL: 244,
  EXTENDED_SYS_STATE: 245,
  ADSB_VEHICLE: 246,
  COLLISION: 247,
  V2_EXTENSION: 248,
  MEMORY_VECT: 249,
  DEBUG_VECT: 250,
  NAMED_VALUE_FLOAT: 251,
  NAMED_VALUE_INT: 252,
  STATUSTEXT: 253,
  DEBUG: 254,
  SETUP_SIGNING: 256,
  BUTTON_CHANGE: 257,
  PLAY_TUNE: 258,
  CAMERA_INFORMATION: 259,
  CAMERA_SETTINGS: 260,
  STORAGE_INFORMATION: 261,
  CAMERA_CAPTURE_STATUS: 262,
  CAMERA_IMAGE_CAPTURED: 263,
  FLIGHT_INFORMATION: 264,
  MOUNT_ORIENTATION: 265,
  LOGGING_DATA: 266,
  LOGGING_DATA_ACKED: 267,
  LOGGING_ACK: 268,
  VIDEO_STREAM_INFORMATION: 269,
  VIDEO_STREAM_STATUS: 270,
  CAMERA_FOV_STATUS: 271,
  CAMERA_TRACKING_IMAGE_STATUS: 275,
  CAMERA_TRACKING_GEO_STATUS: 276,
  GIMBAL_MANAGER_INFORMATION: 280,
  GIMBAL_MANAGER_STATUS: 281,
  GIMBAL_MANAGER_SET_ATTITUDE: 282,
  GIMBAL_DEVICE_INFORMATION: 283,
  GIMBAL_DEVICE_SET_ATTITUDE: 284,
  GIMBAL_DEVICE_ATTITUDE_STATUS: 285,
  AUTOPILOT_STATE_FOR_GIMBAL_DEVICE: 286,
  GIMBAL_MANAGER_SET_PITCHYAW: 287,
  GIMBAL_MANAGER_SET_MANUAL_CONTROL: 288,
  ESC_INFO: 290,
  ESC_STATUS: 291,
  WIFI_CONFIG_AP: 299,
  AIS_VESSEL: 301,
  UAVCAN_NODE_STATUS: 310,
  UAVCAN_NODE_INFO: 311,
  PARAM_EXT_REQUEST_READ: 320,
  PARAM_EXT_REQUEST_LIST: 321,
  PARAM_EXT_VALUE: 322,
  PARAM_EXT_SET: 323,
  PARAM_EXT_ACK: 324,
  OBSTACLE_DISTANCE: 330,
  ODOMETRY: 331,
  TRAJECTORY_REPRESENTATION_WAYPOINTS: 332,
  TRAJECTORY_REPRESENTATION_BEZIER: 333,
  CELLULAR_STATUS: 334,
  ISBD_LINK_STATUS: 335,
  CELLULAR_CONFIG: 336,
  RAW_RPM: 339,
  UTM_GLOBAL_POSITION: 340,
  DEBUG_FLOAT_ARRAY: 350,
  ORBIT_EXECUTION_STATUS: 360,
  SMART_BATTERY_INFO: 370,
  GENERATOR_STATUS: 373,
  ACTUATOR_OUTPUT_STATUS: 375,
  TIME_ESTIMATE_TO_TARGET: 380,
  TUNNEL: 385,
  CAN_FRAME: 386,
  ONBOARD_COMPUTER_STATUS: 390,
  COMPONENT_INFORMATION: 395,
  COMPONENT_METADATA: 397,
  PLAY_TUNE_V2: 400,
  SUPPORTED_TUNES: 401,
  EVENT: 410,
  CURRENT_EVENT_SEQUENCE: 411,
  REQUEST_EVENT: 412,
  RESPONSE_EVENT_ERROR: 413,
  CANFD_FRAME: 387,
  CAN_FILTER_MODIFY: 388,
  WHEEL_DISTANCE: 9000,
  WINCH_STATUS: 9005,
  DEVICE_OP_READ: 11000,
  DEVICE_OP_READ_REPLY: 11001,
  DEVICE_OP_WRITE: 11002,
  DEVICE_OP_WRITE_REPLY: 11003,
  ADAP_TUNING: 11010,
  VISION_POSITION_DELTA: 11011,
  AOA_SSA: 11020,
  ESC_TELEMETRY_1_TO_4: 11030,
  ESC_TELEMETRY_5_TO_8: 11031,
  ESC_TELEMETRY_9_TO_12: 11032,
  OSD_PARAM_CONFIG: 11033,
  OSD_PARAM_CONFIG_REPLY: 11034,
  OSD_PARAM_SHOW_CONFIG: 11035,
  OSD_PARAM_SHOW_CONFIG_REPLY: 11036,
  OBSTACLE_DISTANCE_3D: 11037,
  WATER_DEPTH: 11038,
  MCU_STATUS: 11039,
  OPEN_DRONE_ID_BASIC_ID: 12900,
  OPEN_DRONE_ID_LOCATION: 12901,
  OPEN_DRONE_ID_AUTHENTICATION: 12902,
  OPEN_DRONE_ID_SELF_ID: 12903,
  OPEN_DRONE_ID_SYSTEM: 12904,
  OPEN_DRONE_ID_OPERATOR_ID: 12905,
  OPEN_DRONE_ID_MESSAGE_PACK: 12915,
  OPEN_DRONE_ID_ARM_STATUS: 12918,
  OPEN_DRONE_ID_SYSTEM_UPDATE: 12919,
  HYGROMETER_SENSOR: 12920,
}

export default messageId
