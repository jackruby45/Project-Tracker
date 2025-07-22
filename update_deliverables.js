// Script to update John Davis Station project with comprehensive deliverables
const fs = require('fs');
const path = require('path');

const deliverables = [
  {
    id: "eng-design",
    description: "Engineering & Design",
    completion: 0,
    subsections: [
      { id: "prelim-eng-report", description: "Preliminary Engineering Report", completion: 0 },
      { id: "design-criteria", description: "Design Criteria and Basis of Design Document", completion: 0 },
      { id: "capacity-statement", description: "Capacity Statement and Demand Forecast", completion: 0 },
      { id: "design-parameters", description: "Detailed Design Parameters (including all pipe/material/pressure ratings)", completion: 0 },
      { id: "alternative-analysis", description: "Alternative Design Analysis (summary of alternatives considered)", completion: 0 },
      { id: "construction-drawings", description: "Issued-for-Construction Drawings (including P&ID, 2D & 3D piping/component drawings)", completion: 0 },
      { id: "bill-of-materials", description: "Complete Bill of Materials (BOM) with component descriptions, standards, and specifications", completion: 0 },
      { id: "pressure-test-plan", description: "Pressure Test Plan", completion: 0 },
      { id: "component-specs", description: "Component and Equipment Specifications and Quotations", completion: 0 },
      { id: "station-layout", description: "Station Layout and Site Plans", completion: 0 },
      { id: "preheating-design", description: "Preheating System Design", completion: 0 },
      { id: "scada-design", description: "SCADA and Instrumentation Design", completion: 0 },
      { id: "fire-protection", description: "Fire and Deflagration Protection System Design", completion: 0 },
      { id: "odorization", description: "Odorization (if required) and Odorant Injection Point Design", completion: 0 },
      { id: "corrosion-control", description: "Corrosion Control Plan (including cathodic protection/AC mitigation)", completion: 0 },
      { id: "land-rights", description: "Land Rights and Easement Documentation", completion: 0 },
      { id: "fencing-security", description: "Fencing and Security Design", completion: 0 },
      { id: "facility-isolation", description: "Facility Isolation, Inlet, and Outlet Valve Design", completion: 0 },
      { id: "traffic-protection", description: "Traffic and Tree Fall Protection Design", completion: 0 },
      { id: "foundations", description: "Foundations and Structural Design (building, supports, pads)", completion: 0 },
      { id: "station-bypass", description: "Station Bypass and Tie-in Plans", completion: 0 },
      { id: "pipe-supports", description: "Pipe Supports and Ancillary Facility Design", completion: 0 },
      { id: "generator-power", description: "Generator and Power Supply Design", completion: 0 }
    ]
  },
  {
    id: "eng-calculations",
    description: "Engineering Calculations",
    completion: 0,
    subsections: [
      { id: "pipe-sizing", description: "Pipe Sizing and Stress Calculations (SMYS, % yield, velocity, etc.)", completion: 0 },
      { id: "regulator-sizing", description: "Pressure Regulator Sizing and Capacity Calculations", completion: 0 },
      { id: "relief-valve", description: "Relief Valve and Rupture Disk Sizing", completion: 0 },
      { id: "preheat-sizing", description: "Preheat Sizing Calculations", completion: 0 },
      { id: "noise-calculations", description: "Noise Calculations", completion: 0 },
      { id: "fire-explosion", description: "Fire and Explosion Venting Calculations (NFPA 68 compliance)", completion: 0 }
    ]
  },
  {
    id: "permitting-compliance",
    description: "Permitting & Compliance",
    completion: 0,
    subsections: [
      { id: "codes-standards", description: "List of all applicable Codes and Standards (49 CFR 192, 49 CFR 191, B31.8, API, NFPA, ASTM, State and Local codes, Unitil O&M standards)", completion: 0 },
      { id: "permitting-plan", description: "Permitting Plan (municipal, environmental, FERC, utility)", completion: 0 },
      { id: "land-survey", description: "Land Survey and Property/Right-of-Way Documents", completion: 0 }
    ]
  },
  {
    id: "construction-commissioning",
    description: "Construction & Commissioning",
    completion: 0,
    subsections: [
      { id: "construction-schedule", description: "Construction Schedule (including milestones for design, permitting, construction, as-built)", completion: 0 },
      { id: "procurement", description: "Procurement/Acquisition of Materials and Equipment", completion: 0 },
      { id: "construction-mgmt", description: "Construction Management Plan", completion: 0 },
      { id: "commissioning-startup", description: "Commissioning and Startup Plan", completion: 0 },
      { id: "phased-construction", description: "Phased Construction Plan (Phase 1: land, building, stub; Phase 2: station build, commissioning, abandonments)", completion: 0 },
      { id: "traffic-safety", description: "Traffic and Safety Control Plans for Construction", completion: 0 },
      { id: "as-built-drawings", description: "As-Built Drawings and Documentation", completion: 0 }
    ]
  },
  {
    id: "testing-qa",
    description: "Testing & Quality Assurance",
    completion: 0,
    subsections: [
      { id: "pressure-test-records", description: "Pressure Test Records and Documentation (including test plans, charts, certifications)", completion: 0 },
      { id: "welding-procedures", description: "Welding Procedures and Qualifications (API 1104, company standards)", completion: 0 },
      { id: "ndt-reports", description: "Non-Destructive Testing (NDT) Reports and Records (x-ray, mag particle, eye exams, weld records)", completion: 0 },
      { id: "oq-certification", description: "OQ (Operator Qualification) and Technician Certification Records", completion: 0 },
      { id: "field-sketches", description: "Field As-Built Sketches and Photos", completion: 0 }
    ]
  },
  {
    id: "documentation-records",
    description: "Documentation & Project Records",
    completion: 0,
    subsections: [
      { id: "material-docs", description: "Material Documentation (manufacturer certs, datasheets, traceability)", completion: 0 },
      { id: "existing-conditions", description: "Existing Conditions Documentation (photos, sketches, GIS maps, field drawings)", completion: 0 },
      { id: "field-drawings", description: "Distribution and Gas Operations Field Drawings", completion: 0 },
      { id: "as-built-signoff", description: "As-Built & Material Documentation Sign-Off", completion: 0 },
      { id: "contract-docs", description: "Contract Documents (bids, quotes, estimates, invoices)", completion: 0 },
      { id: "agency-notifications", description: "Notifications to Agencies (city/town, utilities, environmental, safety)", completion: 0 }
    ]
  },
  {
    id: "approval-handover",
    description: "Approval & Handover",
    completion: 0,
    subsections: [
      { id: "project-approvals", description: "Project Approval Signatures (Manager of Gas Engineering, Gas Engineer, Gas Distribution Operations)", completion: 0 },
      { id: "project-closeout", description: "Final Project Closeout Package", completion: 0 }
    ]
  },
  {
    id: "appendices-supporting",
    description: "Appendices & Supporting Materials",
    completion: 0,
    subsections: [
      { id: "location-maps", description: "Location Maps, GIS, and Site Photos", completion: 0 },
      { id: "calculations-data", description: "Calculations and Supporting Data (as required by standard and regulatory bodies)", completion: 0 },
      { id: "regulator-design", description: "Regulator Run Design Calculations", completion: 0 },
      { id: "figures-diagrams", description: "Figures and Diagrams (existing/proposed stations, piping routes, icing events, etc.)", completion: 0 }
    ]
  }
];

console.log('Deliverables structure ready for John Davis Station project:');
console.log(JSON.stringify(deliverables, null, 2));