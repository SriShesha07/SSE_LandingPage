import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FaCog, FaIndustry, FaTruck, FaBoxes, FaWrench, FaShoppingCart, FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ServiceDisplay from '../components/ServiceDisplay';
import './Services.css';

const Services = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [activeService, setActiveService] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({ 0: true }); // First category expanded by default

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Scroll to top and handle service parameter
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    const serviceParam = searchParams.get('service');
    if (serviceParam !== null) {
      const serviceIndex = parseInt(serviceParam, 10);
      if (!isNaN(serviceIndex) && serviceIndex >= 0) {
        setActiveService(serviceIndex);
      }
    }
    
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [location, searchParams]);

  const services = [
    {
      icon: <FaCog />,
      title: 'Engineering Works',
      description: 'We deliver end-to-end engineering solutions — from concept design and detailed engineering to on-site installation, commissioning, and preventive maintenance. Our team handles structural steelwork, plant layout optimization, equipment erection, and process-line integration for manufacturing facilities across automotive, FMCG, and heavy-industry sectors. Every project is executed with rigorous stage-wise quality checks, adherence to IS/ISO fabrication standards, and a focus on minimizing downtime so your production line keeps running.',
      images: [
        '/images/Engineering Works/Picture1.jpg',
        '/images/Engineering Works/Picture2.jpg',
        '/images/Engineering Works/Picture3.jpg',
        '/images/Engineering Works/Picture4.jpg',
        '/images/Engineering Works/Picture5.jpg',
        '/images/Engineering Works/Picture6.jpg',
        '/images/Engineering Works/Picture7.jpg',
        '/images/Engineering Works/Picture8.jpg',
        '/images/Engineering Works/Picture9.jpg',
        '/images/Engineering Works/Picture10.jpg',
        '/images/Engineering Works/Picture11.jpg',
        '/images/Engineering Works/Picture12.jpg',
        '/images/Engineering Works/Picture13.jpg',
        '/images/Engineering Works/Picture14.jpg'
      ]
    },
    {
      icon: <FaIndustry />,
      title: 'Fabrication Works',
      description: 'Our fabrication division specializes in precision cutting, bending, MIG/TIG welding, and full-assembly of custom industrial components — including frames, enclosures, platforms, chutes, hoppers, and machine guards. We work with mild steel, stainless steel, and aluminum to produce structures that meet exact dimensional tolerances and load-bearing specifications. From prototype to batch production, every piece undergoes in-process inspection and final dimensional verification before dispatch, ensuring it integrates seamlessly into your existing plant infrastructure.',
      images: [
        '/images/Fabrication Works/Picture1.jpg',
        '/images/Fabrication Works/Picture2.jpg',
        '/images/Fabrication Works/Picture3.jpg',
        '/images/Fabrication Works/Picture18.jpg',
        '/images/Fabrication Works/Picture19.jpg',
        '/images/Fabrication Works/Picture20.jpg',
        '/images/Fabrication Works/Picture21.jpg',
        '/images/Fabrication Works/Picture22.jpg'
      ]
    },
    {
      icon: <FaTruck />,
      title: 'Trolley Works',
      description: 'We design and manufacture heavy-duty industrial trolleys engineered to streamline your shop-floor material movement. Whether you need platform trolleys for inter-station transfer, bin trolleys for component staging, die-change trolleys for press shops, or ESD-safe trolleys for electronics assembly — each unit is custom-built to your load capacity, dimensional, and ergonomic requirements. Constructed from robust steel with industrial-grade casters, powder-coated finishes, and optional locking mechanisms, our trolleys reduce manual handling effort, minimize part damage, and improve throughput across your production cycle.',
      images: [
        '/images/Trolley Works/Picture23.jpg',
        '/images/Trolley Works/Picture24.jpg',
        '/images/Trolley Works/Picture25.jpg',
        '/images/Trolley Works/Picture26.jpg',
        '/images/Trolley Works/Picture27.jpg',
        '/images/Trolley Works/Picture28.jpg'
      ]
    },
    {
      icon: <FaBoxes />,
      title: 'Rack Works',
      description: 'We design, fabricate, and install custom industrial racking systems that maximize your vertical storage space and bring order to your warehouse or shop floor. Our range includes selective pallet racks, FIFO flow racks, cantilever racks for long materials, multi-tier shelving, and lean pipe racking for line-side presentation. Every system is engineered to your specific load ratings, SKU dimensions, and throughput requirements — complete with floor-anchoring, safety clips, and aisle-width optimization to comply with storage safety standards and accelerate your picking operations.',
      images: [
        '/images/Rack Works/Picture29.jpg',
        '/images/Rack Works/Picture30.jpg',
        '/images/Rack Works/Picture31.jpg',
        '/images/Rack Works/Picture32.jpg',
        '/images/Rack Works/Picture33.jpg'
      ]
    },
    {
      icon: <FaWrench />,
      title: 'Industrial Piping Works',
      description: 'We provide turnkey industrial piping services — covering design, routing, fabrication, installation, pressure testing, and ongoing maintenance for systems carrying compressed air, hydraulic oil, coolant, water, steam, and process gases. Our piping solutions utilize GI, SS, MS, CPVC, and HDPE materials selected to match your pressure ratings, temperature ranges, and fluid compatibility requirements. From header manifold fabrication to valve station assembly and leak-proof joint execution, we ensure your fluid distribution network operates at peak efficiency with minimal pressure drop and zero unplanned leaks.',
      images: [
        '/images/Industrial Piping Works/Picture35.jpg',
        '/images/Industrial Piping Works/Picture36.jpg',
        '/images/Industrial Piping Works/Picture37.jpg',
        '/images/Industrial Piping Works/Picture38.jpg'
      ]
    },
    {
      icon: <FaFilter />,
      title: 'Filter Works',
      description: 'We offer a comprehensive range of industrial filtration and fluid-conditioning solutions designed to extend equipment life, improve product quality, and reduce unplanned downtime. From conventional depth filters and high-pressure hydraulic housings to advanced centrifuge separators, vacuum dehydrators, and coalescing units — we supply, install, and service filtration systems tailored to your hydraulic, lubrication, coolant, and process-fluid circuits. Backed by on-site oil analysis and component cleanliness testing, our solutions help you achieve and maintain the ISO cleanliness levels your OEM specifications demand.',
      categories: [
        {
          name: 'Conventional Filters',
          images: [
            '/images/Filter Works/Conventional Filters/Picture31.jpeg',
            '/images/Filter Works/Conventional Filters/Picture33.jpeg'
          ],
          description: 'High-performance conventional depth filters engineered for hydraulic oil, lubrication oil, and water applications. These filters utilize pleated micro-glass or cellulose media to trap solid contaminants down to specified micron ratings, preventing abrasive wear on pumps, valves, and bearings. Available in return-line, suction-line, and pressure-line configurations, they ensure optimal fluid cleanliness and significantly extend the service life of your critical rotating equipment.'
        },
        {
          name: 'Filter Housing',
          images: [
            '/images/Filter Works/Filter Housing/Picture36.jpeg',
            '/images/Filter Works/Filter Housing/Picture37.jpeg',
            '/images/Filter Works/Filter Housing/Picture38.jpeg',
            '/images/Filter Works/Filter Housing/Picture41.jpeg',
            '/images/Filter Works/Filter Housing/Picture43.jpeg'
          ],
          description: 'We supply a comprehensive range of filter housings to suit every industrial application — including Spin-On Filters for quick change-out in compact spaces, Bag and Cartridge Housings for high-flow bulk filtration, High-Pressure and Low-Pressure Hydraulic Housings rated to withstand demanding system pressures, and corrosion-resistant Polypropylene Housings for chemical and water-treatment processes. Each housing is selected to match your flow rate, pressure rating, and fluid compatibility requirements, ensuring reliable containment and easy element replacement during scheduled maintenance.'
        },
        {
          name: 'Centrifuge',
          images: [
            '/images/Filter Works/Centrifuge/Picture50.jpeg'
          ],
          description: 'Our centrifuge systems spin contaminated oil at high speeds (3,000–7,000 RPM), using centrifugal force to separate heavier contaminants — including sludge, carbon residue, metallic debris, and free or emulsified water — from the clean oil. Unlike conventional filters, centrifuges require no disposable filter elements, making them a reusable and eco-friendly solution. They are highly effective at removing ultra-fine particles below 1 micron, operate continuously with minimal maintenance, and are ideal for extending oil drain intervals in engines, gearboxes, and hydraulic systems across heavy manufacturing environments.'
        },
        {
          name: 'Magnet Filter',
          images: [
            '/images/Filter Works/Magent Filter/Picture56.jpeg',
            '/images/Filter Works/Magent Filter/Picture57.jpeg'
          ],
          description: 'Our magnetic filtration systems harness powerful rare-earth magnets — delivering up to 8 times the magnetic force of conventional ferrite magnets — to attract and capture fine ferrous debris and metallic contaminants from your fluid circuits. With no consumable filter elements required, they offer a zero-waste, low-maintenance solution that excels at trapping particles even with weak magnetic properties. Ideal for hydraulic power units, CNC metalworking fluid lines, gearbox lubrication circuits, and any application where ferrous contamination threatens equipment reliability and surface finish quality.'
        },
        {
          name: 'Vacuum Dehydration',
          images: [
            '/images/Filter Works/Vaccum Dehydratation/Picture59.jpeg',
            '/images/Filter Works/Vaccum Dehydratation/Picture64.jpeg'
          ],
          description: 'Low Vacuum Dehydration (LVD) is a proven physical process that removes free, emulsified, and dissolved water — along with entrained gases and particulate contaminants — from lubricating and hydraulic oils. By applying controlled low vacuum at moderate temperatures, the system lowers the boiling point of water, allowing it to evaporate without degrading the oil\'s additive package or base properties. This technology is essential for maintaining the dielectric strength and lubricity of turbine oils, hydraulic fluids, and transformer oils in power generation, steel, and heavy manufacturing plants.'
        },
        {
          name: 'Coalescer',
          images: [
            '/images/Filter Works/Coalescer/Picture66.jpeg'
          ],
          description: 'Coalescers perform liquid-liquid separation by forcing small, emulsified droplets to merge (coalesce) into larger droplets that can then be easily separated by gravity. This technology is critical for separating water from diesel, jet fuel, and gasoline; removing oil from industrial wastewater; extracting water from light hydrocarbons; and purifying hydrogen peroxide from process solutions. Our coalescing systems ensure your fuels, oils, and process fluids meet stringent purity specifications — protecting downstream equipment, meeting environmental discharge norms, and reducing fluid replacement costs.'
        },
        {
          name: 'Coolant Filtration & Separation',
          images: [
            '/images/Filter Works/Coolant Filtration & Seperation/Picture74.jpeg'
          ],
          description: 'Our coolant filtration and separation systems are engineered to extend coolant life, enhance machining surface finish, and eliminate shop-floor issues such as mist, smoke, odor, and foaming. Portable and equipped with inbuilt filtration, these units prevent unplanned downtime by continuously removing grinding sludge, fine ferrous particles, and tramp oil from your metalworking fluid. The result: significantly reduced coolant disposal and replacement costs, lower pressure drop across the system, minimal maintenance overhead, and a cleaner, healthier working environment — all while meeting eco-friendly operational standards.'
        },
        {
          name: 'Offline Filtration Unit',
          images: [
            '/images/Filter Works/Offline Filtration Unit/Picture80.jpeg',
            '/images/Filter Works/Offline Filtration Unit/Picture81.jpeg'
          ],
          description: 'Offline (kidney-loop) filtration units operate independently of your main hydraulic or lubrication circuit, enabling continuous oil cleaning without interrupting machine operation — even during scheduled shutdowns. These systems effectively remove micron-sized particulates, varnish deposits, and water (when equipped with water-absorbing elements), progressively improving your oil\'s ISO cleanliness code over time. Available in portable cart-mounted or permanent skid-mounted configurations, they also protect your primary in-line filters from premature clogging, reducing overall filtration costs and extending both oil life and equipment reliability.'
        },
        {
          name: 'Tank Breather',
          images: [
            '/images/Filter Works/Tank Breather/Picture83.jpeg',
            '/images/Filter Works/Tank Breather/Picture84.jpeg'
          ],
          description: 'Tank breathers are your first line of defense against external contamination entering hydraulic and lubrication reservoirs. As fluid levels rise and fall during normal machine operation, the breather filters incoming air to remove dirt, dust, and atmospheric moisture before it reaches the oil. This prevents the ingress of abrasive particles and water that accelerate component wear and oil degradation. Widely applied on industrial hydraulic power units (HPUs), press machines, injection molding machines, mobile equipment such as excavators and loaders, oil storage tanks, and wind turbine gearboxes — proper breather selection alone can dramatically improve system cleanliness and reduce maintenance frequency.'
        },
        {
          name: 'Oil Analysis',
          images: [
            '/images/Filter Works/Oil Analysis/Picture105.jpeg'
          ],
          description: 'Our portable oil analysis instruments enable rapid, on-the-spot assessment of oil health, contamination levels, and early-stage machine wear — without waiting for off-site laboratory results. Built with a rugged, field-ready design and equipped with built-in data logging and fluid-image capture, these analyzers let your maintenance team perform routine condition monitoring directly at the machine. By tracking particle counts, water content, viscosity changes, and ferrous debris trends over time, you shift from reactive to predictive maintenance — catching developing issues before they escalate into costly unplanned breakdowns.'
        },
        {
          name: 'Component Cleanliness Analysis',
          images: [
            '/images/Filter Works/Component Cleanliness analysis/Picture110.jpeg',
            '/images/Filter Works/Component Cleanliness analysis/Picture111.jpeg'
          ],
          description: 'Our component cleanliness analysis systems use specialized test enclosures to evaluate the particulate cleanliness of manufactured parts before they enter your assembly line. The process simulates real-world operating conditions by flushing components under controlled turbulent flow, capturing dislodged contaminants on a precision test membrane for microscopic analysis. This enables manufacturers to verify compliance with international cleanliness standards including ISO 18413, ISO 16232, and VDA 19 — a critical requirement for automotive, aerospace, and hydraulic component suppliers where even microscopic contamination can lead to premature field failures.'
        },
        {
          name: 'Oil Analysis at Your Factory',
          images: [
            '/images/Filter Works/Oil Analysis ay your factory/Picture115.jpeg',
            '/images/Filter Works/Oil Analysis ay your factory/Picture117.jpeg'
          ],
          description: 'We bring comprehensive oil analysis directly to your factory floor through our NABL-accredited laboratory services, covering over 100 test parameters across oils, coolants, and greases. Every test is conducted in strict accordance with ASTM and IS standards using fully calibrated instrumentation. From viscosity and TAN/TBN measurements to wear-metal spectroscopy, particle counting, and water-content analysis — our on-site program eliminates sample shipping delays and delivers actionable diagnostic reports that help you optimize drain intervals, catch early-stage equipment wear, and make data-driven lubrication management decisions without production interruption.'
        }
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: 'Materials Trading',
      description: 'We are a trusted supply partner for a wide range of industrial materials and building products — sourced from reputed manufacturers and stocked for rapid dispatch. From pipe fittings and valves for your fluid-handling infrastructure, to steel wire ropes for lifting and rigging, industrial-grade adhesive tapes, insulated PUF panels, pre-painted roofing and cladding sheets, and precision aluminum extrusion profiles — we supply quality-certified materials that meet IS, ASTM, and DIN specifications. Our materials trading division ensures you get the right grade, the right quantity, and competitive pricing with reliable delivery timelines.',
      categories: [
        {
          name: 'Pipe Fittings & Valves',
          images: [
            '/images/Materials Trading - Pipe Fittings & Valves/Picture2.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture3.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture4.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture5.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture6.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture7.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture8.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture9.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture10.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture11.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture12.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture13.jpg',
            '/images/Materials Trading - Pipe Fittings & Valves/Picture14.jpg'
          ],
          description: 'We supply a comprehensive inventory of pipe fittings — including elbows, tees, reducers, couplings, flanges, unions, and nipples — in MS, GI, SS, and CPVC grades to suit pressures from low-duty water lines to high-pressure hydraulic circuits. Our valve range covers gate, globe, ball, butterfly, check, and needle valves from reputed brands, available in sizes from ½" to 12" and rated to IS and ASTM standards. Whether you are setting up a new piping network or replacing components during a shutdown, we ensure prompt availability of the right specification at competitive pricing.'
        },
        {
          name: 'Steel Ropes & Accessories',
          images: [
            '/images/Materials Trading - Steel Ropes & Accessories/Picture15.jpg',
            '/images/Materials Trading - Steel Ropes & Accessories/Picture16.jpg',
            '/images/Materials Trading - Steel Ropes & Accessories/Picture17.jpg',
            '/images/Materials Trading - Steel Ropes & Accessories/Picture18.jpg',
            '/images/Materials Trading - Steel Ropes & Accessories/Picture19.jpg',
            '/images/Materials Trading - Steel Ropes & Accessories/Picture20.jpg'
          ],
          description: 'We stock and supply high-tensile steel wire ropes in various constructions — including 6x19, 6x36, and 8x19 lay patterns — along with all essential rigging accessories such as thimbles, clips, shackles, turnbuckles, swivels, and end fittings. Our ropes are sourced from certified manufacturers and are available in galvanized and ungalvanized finishes for applications spanning EOT cranes, hoists, lifts, winches, guy wires, and general lifting operations. Every rope is supplied with test certificates confirming breaking load and elongation values to IS 2266 / IS 9282 standards.'
        },
        {
          name: 'Tapes',
          images: [
            '/images/Materials Trading - Tapes/Picture58.png'
          ],
          description: 'We supply a full range of industrial-grade adhesive tapes for bonding, masking, insulation, and surface-protection applications. Our inventory includes VHB (Very High Bond) structural foam tapes for permanent metal-to-metal and glass bonding, high-temperature masking tapes for paint shops, BOPP packaging tapes, PVC electrical insulation tapes, anti-skid safety tapes, and double-sided mounting tapes. Sourced from leading manufacturers, each product is selected for reliable adhesion strength, clean removal (where applicable), and performance under the temperature and chemical conditions typical of manufacturing environments.'
        },
        {
          name: 'PUF Panels',
          images: [
            '/images/Materials Trading - PUF Panels/Picture59.png'
          ],
          description: 'We supply Polyurethane Foam (PUF) insulated sandwich panels — consisting of a rigid PUF core bonded between pre-painted galvanized steel skins — for roofing, wall cladding, cold-storage construction, cleanroom partitions, and modular building applications. PUF panels offer one of the lowest thermal conductivity values among common insulation materials, delivering superior energy efficiency, rapid installation through interlocking joint systems, excellent fire resistance (depending on core grade), and hygienic surfaces that resist mould and bacterial growth. Available in thicknesses from 30 mm to 150 mm to match your specific thermal and structural requirements.'
        },
        {
          name: 'PPGI & PPGL Sheets',
          images: [
            '/images/Materials Trading - PPGI & PPGL Sheets/Picture60.jpg'
          ],
          description: 'We trade in Pre-Painted Galvanized Iron (PPGI) and Pre-Painted Galvalume (PPGL) sheets — coil-coated steel products widely used for industrial roofing, wall cladding, false ceilings, and architectural facades. PPGI features a pure zinc coating for cost-effective corrosion protection in mild-to-moderate environments, while PPGL uses an aluminum-zinc alloy coating (55% Al, 43.4% Zn) that delivers superior long-term corrosion and heat resistance — making it ideal for coastal, high-temperature, or chemically aggressive settings. Available in a wide palette of RAL colours, various thicknesses (0.30 mm – 0.80 mm), and profile options to suit your roofing and cladding project specifications.'
        },
        {
          name: 'Aluminum Profiles',
          images: [
            '/images/Materials Trading - Aluminum Profiles/Picture61.jpg'
          ],
          description: 'We supply precision aluminum extrusion profiles in standard and custom cross-sections for industrial framing, machine guards, conveyor structures, workstation enclosures, and clean-room partitions. Manufactured from 6063-T5 and 6061-T6 alloys, these profiles offer an excellent strength-to-weight ratio, natural corrosion resistance, and compatibility with modular T-slot fastening systems for tool-free assembly and reconfiguration. Whether you need standard 20x20 mm profiles for lean manufacturing workstations or heavy-duty 80x80 mm sections for machine safety enclosures, we supply cut-to-length profiles along with corner brackets, hinges, panel clips, and all necessary assembly hardware.'
        }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Precision-engineered solutions across engineering, fabrication, filtration, and materials supply — built for the demands of modern manufacturing
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-section">
        <div className="container">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="tab-icon">{service.icon}</span>
                <span className="tab-title">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="service-content">
            <div className="service-header">
              <div className="service-icon-large">{services[activeService].icon}</div>
              <div>
                <h2 className="service-title">{services[activeService].title}</h2>
                <p className="service-description">{services[activeService].description}</p>
              </div>
            </div>

            {/* Categories or Regular Images */}
            {services[activeService].categories ? (
              <div className="categories-container">
                {services[activeService].categories.map((category, catIndex) => (
                  <div key={catIndex} className="category-section collapsible">
                    <button 
                      className={`category-header ${expandedCategories[catIndex] ? 'expanded' : ''}`}
                      onClick={() => toggleCategory(catIndex)}
                    >
                      <h3 className="category-title">{category.name}</h3>
                      <span className="category-toggle-icon">
                        {expandedCategories[catIndex] ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    
                    {expandedCategories[catIndex] && (
                      <div className="category-content animate-slide-down">
                        <ServiceDisplay
                          images={category.images}
                          description={category.description || 'Details to be added.'}
                          onImageClick={openLightbox}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Regular Service Display */
              <ServiceDisplay
                images={services[activeService].images}
                description={services[activeService].description}
                onImageClick={openLightbox}
                title={services[activeService].title}
              />
            )}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div className="image-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className="lightbox-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
