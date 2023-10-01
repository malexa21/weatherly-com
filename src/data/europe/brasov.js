import { processRawData } from "../../utils";

const RAW_DATA = {
  time: [
    "2023-10-01T00:00",
    "2023-10-01T01:00",
    "2023-10-01T02:00",
    "2023-10-01T03:00",
    "2023-10-01T04:00",
    "2023-10-01T05:00",
    "2023-10-01T06:00",
    "2023-10-01T07:00",
    "2023-10-01T08:00",
    "2023-10-01T09:00",
    "2023-10-01T10:00",
    "2023-10-01T11:00",
    "2023-10-01T12:00",
    "2023-10-01T13:00",
    "2023-10-01T14:00",
    "2023-10-01T15:00",
    "2023-10-01T16:00",
    "2023-10-01T17:00",
    "2023-10-01T18:00",
    "2023-10-01T19:00",
    "2023-10-01T20:00",
    "2023-10-01T21:00",
    "2023-10-01T22:00",
    "2023-10-01T23:00",
    "2023-10-02T00:00",
    "2023-10-02T01:00",
    "2023-10-02T02:00",
    "2023-10-02T03:00",
    "2023-10-02T04:00",
    "2023-10-02T05:00",
    "2023-10-02T06:00",
    "2023-10-02T07:00",
    "2023-10-02T08:00",
    "2023-10-02T09:00",
    "2023-10-02T10:00",
    "2023-10-02T11:00",
    "2023-10-02T12:00",
    "2023-10-02T13:00",
    "2023-10-02T14:00",
    "2023-10-02T15:00",
    "2023-10-02T16:00",
    "2023-10-02T17:00",
    "2023-10-02T18:00",
    "2023-10-02T19:00",
    "2023-10-02T20:00",
    "2023-10-02T21:00",
    "2023-10-02T22:00",
    "2023-10-02T23:00",
    "2023-10-03T00:00",
    "2023-10-03T01:00",
    "2023-10-03T02:00",
    "2023-10-03T03:00",
    "2023-10-03T04:00",
    "2023-10-03T05:00",
    "2023-10-03T06:00",
    "2023-10-03T07:00",
    "2023-10-03T08:00",
    "2023-10-03T09:00",
    "2023-10-03T10:00",
    "2023-10-03T11:00",
    "2023-10-03T12:00",
    "2023-10-03T13:00",
    "2023-10-03T14:00",
    "2023-10-03T15:00",
    "2023-10-03T16:00",
    "2023-10-03T17:00",
    "2023-10-03T18:00",
    "2023-10-03T19:00",
    "2023-10-03T20:00",
    "2023-10-03T21:00",
    "2023-10-03T22:00",
    "2023-10-03T23:00",
    "2023-10-04T00:00",
    "2023-10-04T01:00",
    "2023-10-04T02:00",
    "2023-10-04T03:00",
    "2023-10-04T04:00",
    "2023-10-04T05:00",
    "2023-10-04T06:00",
    "2023-10-04T07:00",
    "2023-10-04T08:00",
    "2023-10-04T09:00",
    "2023-10-04T10:00",
    "2023-10-04T11:00",
    "2023-10-04T12:00",
    "2023-10-04T13:00",
    "2023-10-04T14:00",
    "2023-10-04T15:00",
    "2023-10-04T16:00",
    "2023-10-04T17:00",
    "2023-10-04T18:00",
    "2023-10-04T19:00",
    "2023-10-04T20:00",
    "2023-10-04T21:00",
    "2023-10-04T22:00",
    "2023-10-04T23:00",
    "2023-10-05T00:00",
    "2023-10-05T01:00",
    "2023-10-05T02:00",
    "2023-10-05T03:00",
    "2023-10-05T04:00",
    "2023-10-05T05:00",
    "2023-10-05T06:00",
    "2023-10-05T07:00",
    "2023-10-05T08:00",
    "2023-10-05T09:00",
    "2023-10-05T10:00",
    "2023-10-05T11:00",
    "2023-10-05T12:00",
    "2023-10-05T13:00",
    "2023-10-05T14:00",
    "2023-10-05T15:00",
    "2023-10-05T16:00",
    "2023-10-05T17:00",
    "2023-10-05T18:00",
    "2023-10-05T19:00",
    "2023-10-05T20:00",
    "2023-10-05T21:00",
    "2023-10-05T22:00",
    "2023-10-05T23:00",
    "2023-10-06T00:00",
    "2023-10-06T01:00",
    "2023-10-06T02:00",
    "2023-10-06T03:00",
    "2023-10-06T04:00",
    "2023-10-06T05:00",
    "2023-10-06T06:00",
    "2023-10-06T07:00",
    "2023-10-06T08:00",
    "2023-10-06T09:00",
    "2023-10-06T10:00",
    "2023-10-06T11:00",
    "2023-10-06T12:00",
    "2023-10-06T13:00",
    "2023-10-06T14:00",
    "2023-10-06T15:00",
    "2023-10-06T16:00",
    "2023-10-06T17:00",
    "2023-10-06T18:00",
    "2023-10-06T19:00",
    "2023-10-06T20:00",
    "2023-10-06T21:00",
    "2023-10-06T22:00",
    "2023-10-06T23:00",
    "2023-10-07T00:00",
    "2023-10-07T01:00",
    "2023-10-07T02:00",
    "2023-10-07T03:00",
    "2023-10-07T04:00",
    "2023-10-07T05:00",
    "2023-10-07T06:00",
    "2023-10-07T07:00",
    "2023-10-07T08:00",
    "2023-10-07T09:00",
    "2023-10-07T10:00",
    "2023-10-07T11:00",
    "2023-10-07T12:00",
    "2023-10-07T13:00",
    "2023-10-07T14:00",
    "2023-10-07T15:00",
    "2023-10-07T16:00",
    "2023-10-07T17:00",
    "2023-10-07T18:00",
    "2023-10-07T19:00",
    "2023-10-07T20:00",
    "2023-10-07T21:00",
    "2023-10-07T22:00",
    "2023-10-07T23:00",
  ],
  temperature_2m: [
    12.9, 12.7, 12.8, 12.5, 12.9, 12.4, 11.4, 11, 10.9, 13.2, 15.7, 18.2, 19.7,
    20.9, 21.6, 21.9, 21.4, 20.4, 19.3, 17.4, 15.5, 14.5, 14.1, 14.7, 14.3, 14,
    13.4, 12.9, 12.3, 11.8, 11.3, 10.6, 10.9, 12.1, 13.4, 14.5, 15.7, 16.5, 17,
    17.4, 17.5, 17.2, 16.3, 14.1, 11.6, 10.4, 9.7, 9, 8.2, 7.8, 7.4, 6.7, 6.2,
    5.8, 4.8, 4.1, 4, 6.3, 9.6, 13.4, 16.5, 18.3, 19.1, 19.9, 20.1, 19.8, 18.8,
    16.7, 12.8, 11, 10.4, 9.6, 8.6, 7.6, 6.9, 6.7, 6.9, 7, 6.6, 6.3, 6.3, 9,
    12.3, 16.4, 19.8, 21.6, 22.5, 22.9, 22.8, 22.1, 20.8, 18.5, 15.6, 13.5, 13,
    13.2, 13.3, 12.9, 12.5, 11.9, 11, 10.1, 9.6, 10, 10.9, 12.3, 14.5, 17.2,
    19.3, 20.6, 21.4, 21.5, 20.8, 19.3, 17.8, 16.1, 14.3, 12.8, 12.1, 11.7,
    11.5, 11.3, 11.3, 11.3, 9.2, 7.9, 7.4, 8.1, 9.5, 10.8, 11.9, 13, 13.7, 14.2,
    14.3, 14, 13.1, 11.9, 10.7, 9.9, 9.2, 8.7, 8.6, 8.6, 8.7, 8.8, 8.9, 8.8,
    8.6, 8.3, 8, 7.8, 7.7, 7.6, 7.4, 7.4, 7.5, 8, 8.8, 9.3, 9.2, 8.7, 8.1, 7.1,
    5.9, 4.8, 3.9, 3.1,
  ],
  relativehumidity_2m: [
    72, 72, 72, 78, 75, 75, 81, 80, 82, 78, 67, 55, 53, 47, 42, 38, 41, 44, 48,
    59, 69, 75, 78, 77, 83, 80, 76, 73, 72, 71, 71, 74, 75, 70, 62, 56, 49, 44,
    45, 45, 45, 46, 51, 60, 71, 76, 80, 83, 88, 88, 87, 89, 90, 92, 98, 100, 99,
    92, 77, 63, 50, 41, 37, 34, 35, 38, 46, 50, 62, 71, 72, 76, 79, 85, 91, 92,
    88, 86, 88, 89, 91, 83, 72, 57, 46, 42, 41, 41, 42, 43, 48, 58, 70, 79, 81,
    78, 77, 77, 79, 81, 86, 93, 96, 95, 90, 84, 76, 66, 57, 50, 45, 44, 48, 56,
    64, 71, 79, 85, 88, 90, 91, 91, 89, 88, 93, 96, 96, 92, 86, 79, 71, 62, 56,
    52, 51, 52, 57, 64, 71, 76, 80, 83, 83, 82, 79, 74, 69, 65, 65, 67, 69, 72,
    76, 76, 69, 58, 49, 44, 41, 40, 40, 41, 43, 48, 54, 59, 63, 66,
  ],
};

export const BrasovData = processRawData(RAW_DATA);