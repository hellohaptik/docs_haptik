---
title: Image
---

A HSL Image element is a type of Carousel element. In other words, the type is "CAROUSEL", and mainly its
width and image url needs to be specified.

#### Sample Json

```json
{
  "text": "*Thats out*!☝️ Ovs)",
  "type": "CAROUSEL",
  "data": {
    "image_aspect_ratio": 1.77,
    "width": "FAT",
    "items": [
      {
        "thumbnail": {
          "image": "http://xxx.yyy.zzz.com/Cricket_Images/Match_Scorecard/Innings_Score_Batting_1_186013_2_1523197798.png",
          "type": "LANDSCAPE"
        },
        "actionables": []
      }
    ]
  }
}
```

#### Sample Output

![hsl_sample_image](assets/hsl_sample_image.png)

<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
         <th>Required</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>text</td>
         <td>This is the notification text shown on Apps when a message is sent to users along with the image</td>
         <td>Yes, can be empty</td>
      </tr>
      <tr>
         <td>type</td>
         <td>type list as per the actionables list specified in <a href='https://docs.haptik.ai/hsl/hsl-properties'>hsl-properties</a></td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>data.image_aspect_ratio</td>
         <td>The possible aspect ratios for images</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>data.width</td>
         <td>THIN, MEDIUM, FAT, BIG defines how much space each carousel item will take, this will be set before the image aspect ratio</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>data.items</td>
         <td>Multiple images can be shared at a time as per a carousel, however for a single image we will use one item</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>thumbnail.image</td>
         <td>The image to be sent</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>thumbnail.type</td>
         <td>DEPRECATED - To be set as LANDSCAPE only</td>
         <td>Yes</td>
      </tr>
   </tbody>
</table>
