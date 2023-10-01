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
    12.7, 12.5, 12.6, 12.6, 12.6, 12.8, 12.8, 12.9, 12.9, 13.6, 14.7, 15.9,
    16.9, 17.3, 18.3, 18.3, 18.1, 17.7, 17.3, 16.8, 16.4, 16.1, 15.9, 15.9,
    15.7, 15.4, 15.4, 15.4, 15.4, 15.3, 15.1, 15, 15, 15.8, 17.2, 18.9, 20.8,
    22.2, 23, 23.6, 23.5, 23.3, 22.3, 20.7, 19.5, 18.7, 18.1, 16.9, 16.5, 16.1,
    15.7, 15.3, 15.2, 14.8, 15.3, 15.7, 16.3, 17.7, 20.1, 22.7, 24.7, 25.3,
    24.9, 24.5, 23.7, 19.8, 18.2, 17, 16.3, 15.4, 14.7, 14.1, 13.8, 13.5, 13.4,
    13.2, 12.8, 12.6, 12.5, 12.3, 12.4, 13.1, 14.1, 15, 15.8, 16.5, 17, 17.3,
    17.4, 17.3, 16.7, 15.8, 15, 14.5, 14.1, 13.8, 13.7, 13.7, 13.5, 13.1, 12.5,
    12.1, 12, 12, 12.3, 12.8, 13.6, 14.2, 14.7, 15.1, 15.4, 15.7, 15.8, 15.6,
    15, 14.1, 13.4, 12.8, 12.4, 12.1, 11.8, 11.6, 11.4, 11.2, 11.1, 10.9, 10.5,
    10.2, 10.2, 10.8, 11.7, 12.6, 13.4, 14.1, 14.6, 14.5, 14, 13.5, 13, 12.5,
    12, 11.7, 11.5, 11.2, 10.9, 10.5, 10.1, 9.7, 9.4, 9.2, 9, 8.9, 8.9, 9.1,
    9.3, 9.6, 9.8, 10.1, 10.4, 10.7, 11, 11.1, 11, 10.8, 10.6, 10.5, 10.4, 10.3,
  ],
  relativehumidity_2m: [
    81, 82, 82, 83, 82, 80, 80, 80, 81, 78, 73, 67, 64, 64, 61, 61, 61, 65, 70,
    71, 72, 73, 72, 72, 73, 76, 78, 79, 80, 81, 82, 81, 80, 77, 72, 67, 61, 59,
    58, 56, 57, 58, 64, 72, 77, 79, 82, 87, 88, 90, 89, 88, 86, 84, 82, 76, 71,
    65, 58, 51, 46, 46, 47, 49, 52, 73, 78, 79, 71, 70, 74, 75, 77, 73, 73, 75,
    76, 75, 76, 77, 78, 74, 69, 64, 60, 56, 53, 52, 52, 53, 55, 58, 61, 63, 64,
    65, 66, 67, 69, 75, 82, 86, 86, 84, 80, 75, 68, 63, 60, 59, 58, 58, 60, 62,
    66, 70, 74, 76, 76, 77, 78, 78, 78, 81, 83, 85, 87, 88, 88, 85, 80, 75, 70,
    65, 62, 64, 68, 73, 79, 85, 89, 90, 88, 87, 86, 86, 85, 84, 82, 81, 81, 82,
    83, 83, 83, 83, 82, 80, 79, 78, 76, 76, 77, 79, 81, 81, 81, 81,
  ],
};

export const BerlinData = processRawData(RAW_DATA);