# Rubik’s-Cube Solving Dual-Arm Robot

A high-speed two-arm system that restores a standard 3×3×3 Rubik’s cube in the shortest possible time.  
The robot integrates **real-time vision**, **binary-tree move pruning** and **closed-loop servo control** to achieve **sub-10 s** full-restoration with **≤ 75 mechanical steps**, overcoming the **2024 legacy solution** (TensorFlow-based CNN + greedy moves) which suffered from **slow recognition**, **low success rate**, **poor fault tolerance** and **no move optimisation**, resulting in **17–20 s** total time and **≈ 100 redundant steps**.
---

## Hardware Components

The robot is built for extreme speed and reliability within the 480 × 480 × 480 mm contest limit.

### Sensors
- **USB 2.0 Camera (×4)**: 4-way monocular acquisition, 80 ms single-frame recognition
- **STM32G431 MCU**: 180 MHz main controller

### Manipulator System
- **Closed-loop Stepper Motor**: 0.3 ms micro-step response, no stall under 3 N·m load
- **MHF2-16D1 Pneumatic Gripper**: 32 mm stroke, 90 N clamping force, &lt; 0.15 s open/close cycle
- **Custom Air-Slip-Ring**: 14 mm keyed bore, eliminates hose twist during 360° arm rotation

### Mobility Platform
- **Fixed Dual-Arm Layout**: Left-arm (4-DOF) + Right-arm (4-DOF), 45° aluminium frame mount
- **2020 Alu-Profile Frame**: 470 × 430 × 443 mm, total weight 2.28 kg

### Control Units
- **CT117E-M4 Development Board**: Integrated motor driver & relay bank
- **5 V / 12 V / 24 V Power Layer**: Isolated supply for logic, servo, pneumatics

---

## Software Architecture

### Vision & Colour Clustering
- **OpenCV C++ Pipeline**: RGB → HSV → ROI extraction
- **k-means++ (k = 6)**: Real-time clustering of 54 facets, robust to ambient light drift
- **4-Thread Parallel Capture**: Recognition latency ≤ 80 ms; 5 s faster than 2024 baseline

### Cube Solver & Optimisation
- **Cube Explorer 5.00 API**: Depth-first search + iterative deepening → ≤ 20 face-turn moves
- **Binary-Tree Move Pruning**: Merges consecutive turns of same face; reduces **100 → 75** steps
- **Mechanical Formula Converter**: Maps face-turn sequence to “gripper-open / arm-rotate / gripper-close” sequence; O(n) on-line conversion

---

## Key Features

**Sub-10 s Full Solve**
   - 75 mechanical steps average, 8.2 s best recorded time
**Robust Vision**
   - k-means++ clustering tolerates variable illumination; 97 % colour-classification success
**Lightning-Fast Arms**
   - 1.5 rev/s no-load speed; 0.3 ms closed-loop response


---
## Demonstration
**Before optimisation: 17 ~ 20 s, 100 steps**

<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/cube/魔方1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

**After DFS + Robust Vision: 8 ~ 10 s, 75 steps**

<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/cube/魔方.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

---

## Images  

#### Real-time vision recognition (four-camera fusion)
<figure>
  <img width="550" height="320" src="assets/images/work/cube/cube-vision.jpg" alt="Storage Box Switch" />
</figure>


#### Binary-tree move-pruning schematic
<figure>
  <img width="550" height="320" src="assets/images/work/cube/cube-solver.jpg" alt="Storage Box Switch" />
</figure>

---

## Future Improvements  

- Boost motor no-load speed from 1.5 rev/s to 2.5 rev/s by raising supply voltage (36 V) while maintaining closed-loop stability  
- Improve k-means clustering reliability under contest lighting  
- Package full vision + solver + GUI into a single Windows executable for one-click competition deployment  