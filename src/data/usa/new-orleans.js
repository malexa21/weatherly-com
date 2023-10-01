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
    22.9, 22.6, 22.6, 22.7, 22.9, 23, 23.1, 22.9, 24, 26.5, 28.5, 29.7, 30.9,
    31.3, 31.4, 31.4, 31.3, 30.7, 29.4, 26.8, 25.2, 24, 23.3, 22.6, 22.3, 22,
    21.7, 21.6, 21.4, 21.3, 21.2, 20.9, 22.3, 25.1, 27.3, 29.1, 29.9, 30.2,
    29.9, 29.9, 29.4, 28.9, 27.9, 25.7, 26.5, 26.1, 25.6, 25.4, 25.3, 25.3,
    25.4, 25.6, 25.5, 25.5, 25.5, 25.3, 25.9, 27.4, 28.8, 30.4, 30.8, 30.4,
    29.6, 29.9, 28.9, 29.5, 28.6, 27.4, 26.5, 25.8, 25.4, 25.1, 24.7, 24.3,
    24.1, 23.8, 23.8, 23.9, 23.9, 23.8, 24.6, 26.5, 28.4, 29.7, 30.7, 31.4,
    31.6, 31, 29.5, 28.8, 27.8, 27.1, 26.7, 25.9, 25.5, 25.3, 25.1, 25.1, 25.2,
    25, 24.8, 24.7, 24.7, 24.8, 25.5, 27.3, 29, 30.3, 31.4, 31.6, 31.2, 30.2,
    29.4, 29, 28.8, 28.4, 27.8, 27, 26.4, 26.2, 26.1, 26, 25.9, 25.9, 25.8,
    25.7, 25.7, 25.6, 25.7, 25.8, 25.8, 25.7, 25.4, 25, 24.4, 23.6, 22.8, 22.3,
    21.8, 21.4, 21.1, 20.9, 20.7, 20.7, 20.8, 20.8, 20.6, 20.3, 20.1, 20.1,
    20.1, 20.3, 20.8, 21.6, 22.5, 23.9, 25.5, 26.8, 27.7, 28.2, 28.5, 28.6,
    28.4, 27.9, 27, 25.9, 24.9, 24.4,
  ],
  relativehumidity_2m: [
    83, 89, 91, 93, 93, 93, 94, 93, 88, 81, 65, 53, 48, 42, 36, 35, 33, 31, 31,
    38, 47, 58, 67, 74, 79, 83, 85, 87, 90, 90, 91, 88, 83, 69, 61, 51, 43, 41,
    48, 47, 49, 47, 49, 56, 53, 55, 59, 63, 66, 68, 70, 70, 71, 70, 69, 69, 68,
    61, 55, 48, 44, 44, 47, 45, 46, 43, 46, 52, 57, 61, 62, 61, 62, 62, 62, 64,
    63, 64, 65, 66, 65, 58, 46, 42, 39, 37, 37, 43, 50, 53, 54, 54, 55, 60, 65,
    68, 70, 71, 71, 73, 73, 72, 72, 71, 69, 61, 52, 47, 43, 42, 43, 47, 50, 51,
    52, 54, 58, 62, 65, 66, 66, 66, 66, 66, 65, 64, 63, 62, 61, 61, 62, 64, 67,
    70, 74, 79, 83, 84, 85, 85, 86, 88, 89, 89, 88, 88, 88, 88, 88, 88, 88, 87,
    84, 79, 73, 66, 58, 51, 47, 44, 43, 43, 44, 46, 51, 56, 61, 63,
  ],
};

export const NewOrleansData = processRawData(RAW_DATA);
