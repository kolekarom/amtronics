import { Cpu, Cctv, HardDrive, Package, Search, Eye, Zap, Layers, Wrench, Activity } from 'lucide-react';

export interface Machine {
  id: string;
  name: string;
  model: string;
  make: string;
  description: string;
  icon: any; // Using any for icon component type
  image: string;
}

export const machines: Machine[] = [
  {
    id: 'pick-and-place',
    name: 'High-Speed Pick & Place',
    model: 'NXT III',
    make: 'Fuji CP-8',
    description: 'Ultra-precise component placement with 0.03mm accuracy and 100,000+ CPH speed.',
    icon: Cpu,
    image: '/images/machines/pick-and-place.jpg'
  },
  {
    id: 'reflow-oven',
    name: 'Reflow Oven',
    model: 'HELLER 1900',
    make: 'Heller',
    description: '10-zone convection reflow oven with nitrogen capability for lead-free soldering.',
    icon: Zap,
    image: '/images/machines/reflow-oven.jpg'
  },
  {
    id: 'spi',
    name: 'Solder Paste Inspection',
    model: 'SPI-3D',
    make: 'Koh Young',
    description: '3D inspection system for solder paste deposition with micron-level accuracy.',
    icon: Eye,
    image: '/images/machines/spi.jpg'
  },
  {
    id: 'aoi',
    name: 'Automated Optical Inspection',
    model: 'AOI-XP',
    make: 'Mirtec',
    description: 'High-resolution AOI system for detecting assembly defects and component placement issues.',
    icon: Search,
    image: '/images/machines/aoi.jpg'
  },
  {
    id: 'selective-solder',
    name: 'Selective Soldering',
    model: 'Select 4.0',
    make: 'ERSA',
    description: 'Precision selective soldering for through-hole and mixed technology assemblies.',
    icon: Activity,
    image: '/images/machines/selective-solder.jpg'
  },
  {
    id: 'xray-inspection',
    name: 'X-Ray Inspection',
    model: 'X-RAY 2.5D',
    make: 'Nordson DAGE',
    description: 'High-resolution X-ray inspection for BGA, QFN, and other hidden solder joints.',
    icon: Cctv,
    image: '/images/machines/xray.jpg'
  },
  {
    id: 'wave-solder',
    name: 'Wave Soldering',
    model: 'WS-350',
    make: 'Electrovert',
    description: 'Dual wave soldering system with nitrogen inerting for high-quality through-hole connections.',
    icon: Layers,
    image: '/images/machines/wave-solder.jpg'
  },
  {
    id: 'conformal-coating',
    name: 'Selective Coating',
    model: 'SC-350',
    make: 'Nordson ASYMTEK',
    description: 'Precision conformal coating application with vision alignment and inspection.',
    icon: Package,
    image: '/images/machines/conformal-coating.jpg'
  },
  {
    id: 'flying-probe',
    name: 'Flying Probe Tester',
    model: 'FLEX-5',
    make: 'Takaya',
    description: 'High-speed electrical test system for prototype and low-to-medium volume production.',
    icon: Wrench,
    image: '/images/machines/flying-probe.jpg'
  }
];
