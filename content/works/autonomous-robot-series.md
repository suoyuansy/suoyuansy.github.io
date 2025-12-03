# Autonomous Item Handling Robot

An autonomous robot capable of navigating simple terrain, avoiding obstacles, and performing item handling tasks based on known maps. The robot can autonomously navigate, grasp items, carry them, and sort them into designated recycling areas marked with QR codes.

## Hardware Components

The robot's hardware system is designed for robust performance in varied environments:

### Sensors
- **Mid-360 LiDAR**: Provides comprehensive environment scanning for navigation and obstacle detection
- **USB Camera**: Enables visual recognition and item identification capabilities

### Manipulator System
- **Stepper Motor-driven Robotic Arm**: Offers precise control for lifting and moving objects
- **Servo-driven Gripper**: Ensures reliable grasping of various item types and sizes

### Mobility Platform
- **Mecanum Wheel Chassis**: Enables omnidirectional movement for flexible navigation in tight spaces

### Control Units
- **Jetson Orin NX Computing Module**: Handles complex computational tasks including navigation and object recognition
- **STM32F407 Control Board**: Manages real-time control of motors and sensors

## Software Architecture

The software framework integrates multiple technologies to enable autonomous operation:

### Mapping and Navigation
- **FAST-LIO**: Implements efficient scanning and mapping algorithms for real-time localization

### Object Detection
- **YOLOv5**: Provides fast and accurate item detection capabilities

### Vision Processing
- **OpenCV**: Processes visual data for coordinate calculation and spatial awareness

## Key Features

The robot offers several distinct capabilities that make it suitable for automated item handling tasks:
<br>
**Autonomous Navigation**
   - Map-based path planning for efficient route calculation
   - Advanced obstacle avoidance capabilities for safe operation
   - Terrain traversal including curbs and slopes

**Item Handling**
   - Visual recognition of items for identification and sorting
   - Precise grasping mechanism for reliable item pickup
   - QR code-based sorting system for accurate item placement

**Multi-modal Mobility**
   - Omnidirectional movement for flexible positioning
   - Obstacle negotiation capabilities for navigating complex environments

## Demonstration
<br>
<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RAICOM&CRAIC/智能家居.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

## Images

#### Chassis movement demonstration
<figure>
  <img src="assets/gif/item-handling-robot/chassis-movement.gif" alt="Chassis Movement" />
</figure>

#### Robotic arm elevation
<figure>
  <img src="assets/gif/item-handling-robot/arm-elevation.gif" alt="Arm Elevation" />
</figure>

#### Robotic arm extension
<figure>
  <img src="assets/gif/item-handling-robot/arm-extension.gif" alt="Arm Extension" />
</figure>

#### Robot traversing speed bumps
<figure>
  <img src="assets/gif/item-handling-robot/obstacle-negotiation.gif" alt="Obstacle Negotiation" />
</figure>

#### Robot traversing slopes
<figure>
  <img src="assets/gif/item-handling-robot/uphill.gif" alt="Traversing Slopes" />
</figure>

#### Robot gripper opening and closing
<figure>
  <img src="assets/gif/item-handling-robot/claw-operation.gif" alt="Gripper Opening and Closing" />
</figure>

#### Robot storage box switch
<figure>
  <img src="assets/gif/item-handling-robot/storage-box-rotate.gif" alt="Storage Box Switch" />
</figure>

## Future Improvements

Several enhancements are planned to further improve the robot's capabilities:

- Enhanced object recognition capabilities for better item identification
- Improved terrain handling algorithms for more challenging environments
- Extended battery life and efficiency for longer operational periods
- More sophisticated sorting mechanisms for complex classification tasks


# Autonomous Fruit Harvesting Robot  



In the pursuit of advancing agricultural automation, I developed an autonomous fruit harvesting robot capable of navigating predefined maps and selectively harvesting ripe fruits while leaving unripe ones untouched. This innovative system represents a significant step toward sustainable and efficient farming practices.  




## Hardware Components  



The robot is equipped with a comprehensive sensor suite that enables it to perceive and interact with its environment effectively:  

- **Mid-360 LiDAR System**: Provides 360-degree environmental scanning for simultaneous localization and mapping  
- **High-resolution USB Camera**: Serves as the primary vision sensor for fruit detection and localization  
- **Laser Ranging Module**: Ensures precise distance measurements during the harvesting process for accurate positioning relative to target fruits  

The mechanical design features a mecanum wheel chassis that provides omnidirectional mobility, allowing the robot to maneuver flexibly in orchard environments. A precision-engineered manipulator system, driven by stepper motors, handles the translational movements required for reaching fruits at various positions. The harvesting end-effector consists of a servo-driven gripper specifically designed to handle delicate fruits without causing damage during the picking process.  

The entire system is orchestrated by a dual-controller architecture featuring:  
- **Jetson Orin NX Computing Module**: Handles high-level processing tasks  
- **STM32F407 Microcontroller**: Manages real-time motion control  




## Software Architecture  



The software architecture integrates state-of-the-art algorithms to enable autonomous operation:  

- **POINT-LIO**: Foundation for robust LiDAR-based simultaneous localization and mapping, providing the spatial awareness necessary for navigation  
- **YOLOv5**: Implemented and trained for fruit detection and classification to distinguish between ripe (red) and unripe (green) fruits with high accuracy  
- **OpenCV-based Computer Vision**: Processes camera data to calculate precise 3D coordinates of target fruits  
- **Laser Ranging Integration**: Provides fine-tuned distance adjustments to ensure optimal harvesting positioning  




## Operational Workflow  



The robot's operational workflow follows a systematic process:  

1. **Map-based Navigation**: The robot navigates to the target orchard area using predefined maps  
2. **Fruit Scanning**: Once in position, the vision system scans for fruits, identifying only those that have reached maturity  
3. **Path Planning**: The robot calculates the optimal approach path, utilizing its omnidirectional mobility to position itself for harvesting  
4. **Precision Harvesting**: The manipulator system extends toward the target fruit, with the laser ranging module providing real-time distance feedback to ensure precise positioning  
5. **Fruit Collection**: The gripper mechanism carefully grasps the fruit, detaches it from the plant, and retracts to transport it to a designated collection area  
6. **Unloading**: Harvested fruits are gently deposited in the collection area  




## Demonstration  

<br>
<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RAICOM&CRAIC/摘果子.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

<br>   <!-- 两个 <br> 可让间距更明显，按需增减 -->

<p align="center">
  <video width="550" height="320" preload="metadata" controls>
    <source src="assets/video/RAICOM&CRAIC/摘果子1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<br>   <!-- 若视频下方还要继续写内容，也留一行 -->

## Images  



#### Robot navigating through orchard environment  

<figure>
  <img src="assets/gif/fruit-picking-robot/movement.gif" alt="Storage Box Switch" />
</figure>

#### Precision harvesting of target fruits  

<figure>
  <img src="assets/gif/fruit-picking-robot/picking.gif" alt="Storage Box Switch" />
</figure>

#### Store the picked fruits in storage baskets for transportation  

<figure>
  <img src="assets/gif/fruit-picking-robot/transportation.gif" alt="Storage Box Switch" />
</figure>

#### Transportation and unloading of harvested fruits  

<figure>
  <img src="assets/gif/fruit-picking-robot/unload.gif" alt="Storage Box Switch" />
</figure>


## Impact & Future Work  



This autonomous harvesting system demonstrates the potential for robotics to address labor shortages in agriculture while maintaining the careful handling required for delicate produce. The selective harvesting capability ensures only ripe fruits are collected, potentially improving overall crop quality and reducing waste. Future developments will focus on expanding the system's capabilities to handle a wider variety of crops and environmental conditions, as well as improving the efficiency and speed of the harvesting process.  

The integration of advanced perception, navigation, and manipulation technologies in this robot showcases how modern robotics can be applied to traditional agricultural challenges, offering a glimpse into the future of smart farming where autonomous systems work alongside human operators to increase productivity and sustainability.