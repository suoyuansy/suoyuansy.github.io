# RoboMaster Multi-Robot Autonomous Combat System

The system fuses **high-response motor control**, **real-time armor-plate vision tracking**, **LiDAR navigation** and **multi-robot tactical coordination**, cutting aim-lock latency to **90 ms** and achieving **50 % hit-rate** under 160 ms total delay.

---

## Hardware Components

Built for 480 × 480 × 480 mm contest limit and 20 kg weight cap.

### Sensors
- **Daheng Mercury-Ⅱ Camera**: 
  1280×1024 @ 120 fps, single-frame recognition ≤ 80 ms
- **Mid-360 LiDAR**: 360° scanning for 6-DoF localization & obstacle mapping


### Drive & Chassis
- **Omni-Directional Wheels**: 3.5 m/s max speed, zero-radius turn  
- **3508/6020 BLDC Motors**: 24 V, CAN-FD ring, closed-loop current control  
- **Super-Capacitor Bank**: 80 J burst energy for instant acceleration

### Compute & Interface
- **Jetson Orin NX**: 70 TOPS GPU, runs YOLOv5 + TensorRT at 110 FPS  
- **STM32F407**: Real-time motor & pneumatic control
- **Industrial USB-TTL**: 115 200 bps vision-to-MCU link, CRC-8 checksum

---

## Software Architecture

### Vision & Auto-Aim Pipeline
- **YOLOv5n Training**: 35 k armor-plate images; mAP@0.5 ≥ 0.92  
- **TensorRT INT8**: 1.5-2× speed-up, 110 FPS on Orin NX  
- **NMS + IoU ≥ 0.7**: Keeps best anchor; confidence ≥ 0.7  
- **HSV Color Check**: Robust red/blue lamp-bar classification under varying light  
- **Gray-Centroid Feature**: Sub-pixel lamp-tip extraction for PnP  
- **EKF Motion Predictor**: Fuses IMU & vision, predicts target 160 ms ahead  
- **Two-Model Switch**: Constant-speed rotation vs. variable-speed translation  

### Navigation & Decision (Sentry)
- **FAST-LIO2**: 3-D point-cloud map, 2 cm voxel  
- **FSM Tactics**: Patrol → Search → Fire → Retreat, multi-robot coordination via ROS 2 DDS  

---

## Demonstration
**08 Mar 2025 – Final field test on WHU Innovation Practice Floor before departing to Jinhua, Zhejiang**

<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RM/RM.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>


**14 Mar 2025 – Pre-match tuning at Zhejiang Normal University**
<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RM/RM2.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

**15 Mar 2025 – Official match: our sentry robot eliminates the enemy hero**
<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RM/RM3.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

---

## Future Improvements

- Upgrade to YOLOv8 + TensorRT 9 for 20 % latency cut  
- Docker-packaged deployment for next-season robots  
- Re-tune turret-motor PID gains for faster, smoother aiming response