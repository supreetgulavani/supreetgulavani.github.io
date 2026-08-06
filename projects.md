---
layout: default
title: Projects
---

<p class="eyebrow"><span class="pad" aria-hidden="true"></span>Projects</p>
<h1>Projects</h1>
<p class="role">A mix of independent research, coursework, and personal builds spanning RTL, verification, and FPGA systems.</p>

<div class="proj-grid" style="margin-top:24px;">

  <div class="proj">
    <div class="proj-head"><h3>LLM-based ICL/PDL Generator</h3><span class="status">PATENT PENDING</span></div>
    <p>Generator for ICL/PDL leveraging large language models.</p>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>Adiabatic Reversible Logic</h3><span class="status wip">IN PROGRESS</span></div>
    <p>Independent study of low-power adiabatic reversible logic design, exploring energy-efficient gates through custom SystemVerilog simulations grounded in the academic literature.</p>
    <div class="links"><a href="https://github.com/YOUR-GITHUB" target="_blank">GitHub ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>RISC-V 5-Stage Pipelined CPU</h3><span class="status wip">IN PROGRESS</span></div>
    <p>Custom RISC-V core with hazard detection and data forwarding to resolve dependencies. Verified in SystemVerilog using QuestaSim, with a modular testbench focused on accuracy and throughput.</p>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>MQTT-based IoT Weather Station</h3></div>
    <p>Nexys A7 FPGA build with a custom AXI Ethernet peripheral and I2C sensor interfacing. Sensor data streamed over MQTT via the LwIP stack on a Microblaze softcore, bare-metal.</p>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>Space Invaders on RISC-V Softcore</h3></div>
    <p>Nexys A7 FPGA build. VGA controller and push-button drivers in SystemVerilog, interfaced over Wishbone to an RVFPGA softcore, with game logic and peripheral drivers in C.</p>
    <div class="links"><a href="https://github.com/YOUR-GITHUB" target="_blank">GitHub ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>DDR4 DRAM Memory Controller</h3></div>
    <p>Command scheduling simulated in C++ across in-order, FR-FCFS, and out-of-order policies, with queue logic and timing checks.</p>
    <div class="links"><a href="https://github.com/YOUR-GITHUB" target="_blank">GitHub ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>Verification of RojoBlaze</h3></div>
    <p>UVM-style testbench — BFM, scoreboard, monitor, driver — for an 8-bit microcontroller with a 4-stage pipeline. Reached 65% functional and 68% code coverage via constrained-random tests through a Makefile flow.</p>
    <div class="links"><a href="https://github.com/YOUR-GITHUB" target="_blank">GitHub ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>RISC-V ISA Simulator</h3></div>
    <p>RV32I simulator in C++ supporting single- and multi-step breakpoints, MUL extensions, and syscall emulation.</p>
    <div class="links"><a href="https://github.com/YOUR-GITHUB" target="_blank">GitHub ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>2D Multithreaded Graphics Renderer</h3></div>
    <p>Multithreaded 2D renderer built on HAGL SDL, studying FPS improvements across 1–16 threads.</p>
    <div class="links"><a href="#">Project report ↗</a></div>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>MLP-Aware Cache Replacement</h3></div>
    <p>Simulation of Qureshi et al.'s ISCA'06 cache replacement method (DOI 10.1109/ISCA.2006.5).</p>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>RL-based Channel Selection</h3></div>
    <p>Reinforcement-learning approach to dynamic band and channel selection in cognitive radio networks, using NS3 and OpenAI Gym, reducing collisions over 75 episodes.</p>
  </div>

  <div class="proj">
    <div class="proj-head"><h3>Hand Gesture Recognition</h3></div>
    <p>IMU and flex-sensor glove detecting Indian Sign Language gestures, with custom PCBs and PIC &amp; TIVA microcontrollers handling communication and processing.</p>
  </div>

</div>
