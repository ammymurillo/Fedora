/* ============================================
   FEDORA LINUX TIMELINE - JavaScript
   ============================================ */

const newLocal = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Fedora_12_Constantine_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled";
// Datos de la línea de tiempo — CADA VERSIÓN TIENE SU PROPIA IMAGEN
const timelineData = [
    {
        version: "Fedora Core 1",
        codename: "Yarrow",
        year: "2003",
        date: "6 de noviembre de 2003",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fedora_Core_1.png/960px-Fedora_Core_1.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail", 
        preview: "Primera versión de Fedora, basada en Red Hat Linux 9. Inicio del modelo comunitario con ciclo de lanzamientos rápidos.",
        features: ["Kernel Linux 2.4.22", "GNOME 2.4 como escritorio principal", "KDE 3.1 como alternativa", "Logo clásico de Fedora con 'f' estilizada"],
        impact: "Marcó el inicio del modelo comunitario de Fedora, separándose de Red Hat Linux comercial y estableciendo un ciclo de lanzamientos rápidos (~6 meses).",
        ux: "Escritorio GNOME 2 clásico con panel inferior, menú Applications/Places/System; entorno familiar para usuarios de Red Hat Linux 9.",
        tags: ["GNOME 2", "Kernel 2.4", "Inicio"]
    },
    {
        version: "Fedora Core 2",
        codename: "Tettnang",
        year: "2004",
        date: "18 de mayo de 2004",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Fedora_Core_2.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Introducción de SELinux y migración de XFree86 a X.Org Server. Kernel 2.6.5 y GNOME 2.6.",
        features: ["Kernel Linux 2.6.5", "GNOME 2.6 y KDE 3.2", "SELinux (Security-Enhanced Linux) introducido", "X.Org Server reemplaza XFree86"],
        impact: "SELinux sentó bases para seguridad a nivel de sistema operativo; X.Org mejoró soporte gráfico y drivers.",
        ux: "SELinux deshabilitado por defecto inicialmente; mejoras en gestión de fuentes y renderizado gráfico.",
        tags: ["SELinux", "X.Org", "Seguridad"]
    },
    {
        version: "Fedora Core 3",
        codename: "Heidelberg",
        year: "2004",
        date: "8 de noviembre de 2004",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Fedora_Core_3.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 
        preview: "Mozilla Firefox como navegador predeterminado, soporte Indic scripts, GRUB como bootloader y SELinux habilitado por defecto.",
        features: ["Mozilla Firefox navegador por defecto", "Soporte para scripts Indic", "GRUB reemplaza LILO como bootloader", "SELinux habilitado por defecto (política targeted)", "Fedora Extras (repositorio comunitario)"],
        impact: "Fedora Extras amplió paquetes disponibles; GRUB reemplazó LILO estandarizando bootloaders en Linux.",
        ux: "Firefox mejoró experiencia web; SELinux más usable con políticas menos estrictas que en Core 2.",
        tags: ["Firefox", "GRUB", "SELinux"]
    },
    {
        version: "Fedora Core 4",
        codename: "Stentz",
        year: "2005",
        date: "13 de junio de 2005",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fedora_Core_4.png/960px-Fedora_Core_4.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail", 
        preview: "Tema Clearlooks, OpenOffice.org 2.0, virtualización Xen, soporte PowerPC y +80 políticas SELinux.",
        features: ["Nuevo tema Clearlooks (inspirado en Bluecurve)", "OpenOffice.org 2.0", "Virtualización con Xen", "Soporte para arquitectura PowerPC", "Más de 80 nuevas políticas SELinux"],
        impact: "Xen permitió virtualización ligera; Clearlooks influyó en temas GTK posteriores durante años.",
        ux: "Tema Clearlooks más moderno y limpio; OpenOffice 2 mejoró productividad del usuario.",
        tags: ["Xen", "Clearlooks", "PowerPC"]
    },
    {
        version: "Fedora Core 5",
        codename: "Bordeaux",
        year: "2006",
        date: "20 de marzo de 2006",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fedora_Core_5.png/960px-Fedora_Core_5.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail", 
        preview: "Arte 'Fedora Bubbles', inclusión de Mono, Beagle, F-Spot, Tomboy; herramientas pup/pirut y NPTL.",
        features: ["Arte de escritorio 'Fedora Bubbles' (burbujas azules)", "Mono y aplicaciones .NET en Linux (Beagle, F-Spot, Tomboy)", "Herramientas gráficas pup y pirut", "NPTL reemplaza LinuxThreads", "GNOME 2.14 y KDE 3.5"],
        impact: "Mono permitió desarrollo .NET en Linux; NPTL mejoró threading nativo significativamente.",
        ux: "Arte Bubbles distintivo; herramientas gráficas de actualización más amigables para usuarios.",
        tags: ["Mono", "Bubbles", "NPTL"]
    },
    {
        version: "Fedora Core 6",
        codename: "Zod",
        year: "2006",
        date: "24 de octubre de 2006",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Fedora_Core_6_Desktop.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Arte 'Fedora DNA', soporte Compiz y AIGLX para efectos 3D, Firefox 1.5 y herramienta Smolt.",
        features: ["Arte de escritorio 'Fedora DNA' (hélice de ADN)", "Soporte Compiz y AIGLX (efectos 3D en escritorio)", "Firefox 1.5", "Herramienta Smolt para reporte de hardware", "GNOME 2.16"],
        impact: "Compiz popularizó efectos de escritorio 3D en Linux; RHEL 5 se basó en Fedora Core 6.",
        ux: "Efectos de escritorio 3D revolucionaron la experiencia visual; Smolt mejoró soporte de hardware.",
        tags: ["Compiz", "AIGLX", "3D"]
    },
    {
        version: "Fedora 7",
        codename: "Moonshine",
        year: "2007",
        date: "31 de mayo de 2007",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Fedora7_gnome_desktop.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Fusión de repositorios Core y Extras, nuevo sistema de build, tres spins oficiales y tema Flying High.",
        features: ["Fusión de repositorios Core y Extras", "Eliminación de 'Core' del nombre", "Nuevo sistema de build y Revisor", "Tres spins oficiales: Live, DVD, Everything", "Tema 'Flying High' con íconos renovados", "GNOME 2.18 y KDE 3.5"],
        impact: "Unificación de repositorios simplificó mantenimiento; Revisor permitió distribuciones personalizadas.",
        ux: "Tema Flying High con íconos renovados; cambio rápido de usuario integrado por defecto.",
        tags: ["Fusión", "Spins", "Moonshine"]
    },
    {
        version: "Fedora 8",
        codename: "Werewolf",
        year: "2007",
        date: "8 de noviembre de 2007",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fedora_8_GNOME.png/960px-Fedora_8_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "PulseAudio por defecto, tema Infinity con fondo dinámico según hora, NetworkManager mejorado.",
        features: ["PulseAudio como servidor de audio por defecto", "Tema 'Infinity' (fondo dinámico según hora del día)", "Tema Nodoka reemplaza Flying High", "system-config-firewall nuevo", "IcedTea (Java abierto)", "NetworkManager mejorado"],
        impact: "PulseAudio estandarizó audio en Linux; IcedTea avanzó hacia Java abierto.",
        ux: "Fondo de escritorio cambiante según hora del día; tema Nodoka para consistencia UI.",
        tags: ["PulseAudio", "Infinity", "Nodoka"]
    },
    {
        version: "Fedora 9",
        codename: "Sulphur",
        year: "2008",
        date: "13 de mayo de 2008",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Fedora.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "GNOME 2.22, KDE Plasma 4.0, OpenJDK 6, PackageKit, One Second X, Upstart y Anaconda mejorado.",
        features: ["GNOME 2.22", "KDE Plasma 4.0", "OpenJDK 6 (reemplaza IcedTea)", "PackageKit (gestión de paquetes gráfica)", "One Second X (arranque rápido de X)", "Upstart como sistema de init", "Anaconda con soporte NTFS y cifrado"],
        impact: "OpenJDK reemplazó IcedTea; PackageKit unificó gestión de paquetes gráfica en distros Linux.",
        ux: "KDE 4 moderno y renovado; instalación más rápida con One Second X.",
        tags: ["KDE 4", "PackageKit", "OpenJDK"]
    },
    {
        version: "Fedora 10",
        codename: "Cambridge",
        year: "2008",
        date: "25 de noviembre de 2008",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Fedora_10_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Plymouth, soporte ext4, Sugar y LXDE como spins, GNOME 2.24 y arte Solar.",
        features: ["Plymouth (pantalla de arranque unificada)", "Soporte para filesystem ext4", "Sugar Desktop (educación) y LXDE como spins", "GNOME 2.24 y KDE 4.1", "OpenOffice.org 3.0", "Arte 'Solar' (tonos cálidos)"],
        impact: "ext4 se volvió estándar; Plymouth mejoró experiencia de arranque en todas las derivadas (incluido RHEL 6).",
        ux: "Plymouth eliminó pantallas de texto durante arranque; Sugar enfocado en educación infantil.",
        tags: ["Plymouth", "ext4", "Sugar"]
    },
    {
        version: "Fedora 11",
        codename: "Leonidas",
        year: "2009",
        date: "9 de junio de 2009",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Fedora_11_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "ext4 por defecto, Btrfs experimental, arranque en ~20 segundos, GCC 4.4 y soporte fingerprint.",
        features: ["ext4 como filesystem por defecto", "Btrfs experimental (opción IcantbelieveitsnotBTR)", "Objetivo de arranque en 20 segundos", "GCC 4.4", "GNOME 2.26 y KDE 4.2", "Soporte para lectores de huella (fprint)"],
        impact: "Btrfs experimental sentó bases para adopción futura; arranque rápido influyó en otras distros Linux.",
        ux: "Arranque significativamente más rápido; soporte biométrico integrado.",
        tags: ["ext4", "Btrfs", "20s Boot"]
    },
    {
        version: "Fedora 12",
        codename: "Constantine",
        year: "2009",
        date: "17 de noviembre de 2009",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Fedora_12_Constantine_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Optimización i686, abrt, Bluetooth on-demand, delta RPMs, XZ compression y Moblin.",
        features: ["Optimización para i686 (todos los paquetes)", "abrt (reporte automático de bugs)", "Bluetooth on-demand", "Delta RPMs (yum-presto) para actualizaciones", "Compresión XZ en paquetes RPM", "Moblin interfaz para netbooks", "GNOME 2.28"],
        impact: "Delta RPMs redujeron tamaño de actualizaciones; XZ mejoró compresión de paquetes significativamente.",
        ux: "abrt facilitó reporte de errores; Moblin ofreció interfaz optimizada para netbooks.",
        tags: ["abrt", "Delta RPM", "XZ"]
    },
    {
        version: "Fedora 13",
        codename: "Goddard",
        year: "2010",
        date: "25 de mayo de 2010",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fedora_13_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        preview: "Instalación automática de drivers de impresora, gestión de color, SSSD, NFS mejorado y Btrfs rollback.",
        features: ["Instalación automática de drivers de impresora", "Instalación automática de paquetes de idioma", "Gestión de color profesional", "SSSD (autenticación empresarial)", "NFS mejorado", "Rollback Btrfs", "GNOME 2.30"],
        impact: "SSSD mejoró autenticación empresarial; gestión de color profesional para diseñadores y fotógrafos.",
        ux: "'Plug-and-play' para impresoras; calibración de monitores integrada.",
        tags: ["SSSD", "Color", "Btrfs"]
    },
    {
        version: "Fedora 14",
        codename: "Laughlin",
        year: "2010",
        date: "2 de noviembre de 2010",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fedora_14_GNOME.png/960px-Fedora_14_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Última versión con GNOME 2; preview de GNOME Shell, Python 2.7, Spice para VDI y libjpeg-turbo.",
        features: ["Última versión con GNOME 2 (ahora MATE)", "Tech preview de GNOME Shell", "Python 2.7", "Spice framework para VDI", "libjpeg-turbo (rendimiento de imágenes)", "GNOME 2.32"],
        impact: "Transición inminente a GNOME 3; Spice mejoró virtualización de escritorio remoto.",
        ux: "Preview de GNOME Shell mostró el futuro del escritorio Linux; última versión estable de GNOME 2.",
        tags: ["GNOME 2", "GNOME Shell", "Spice"]
    },
    {
        version: "Fedora 15",
        codename: "Lovelock",
        year: "2011",
        date: "24 de mayo de 2011",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Fedora_15_GNOME.png/960px-Fedora_15_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3 por defecto, LibreOffice reemplaza OpenOffice, systemd como init, LLVMpipe y firewalld.",
        features: ["GNOME 3.0 con Shell por defecto", "LibreOffice reemplaza OpenOffice.org", "systemd como sistema init", "LLVMpipe (renderizado por software)", "firewalld (firewall dinámico)", "GCC 4.6"],
        impact: "systemd se volvió estándar en Linux; LibreOffice consolidó suite ofimática libre post-Oracle.",
        ux: "GNOME 3 con Shell revolucionó interfaz (Activities, overview); controversia pero también innovación.",
        tags: ["GNOME 3", "systemd", "LibreOffice"]
    },
    {
        version: "Fedora 16",
        codename: "Verne",
        year: "2011",
        date: "8 de noviembre de 2011",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fedora_16_verne_Linux_Version.png/960px-Fedora_16_verne_Linux_Version.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Kernel 3.1, GNOME 3.2, GRUB2 por defecto, HAL removido, OpenStack y dedicado a Dennis Ritchie.",
        features: ["Kernel Linux 3.1", "GNOME 3.2.1", "GRUB2 como bootloader por defecto", "HAL removido (udisks, upower, libudev)", "OpenStack y mejoras en cloud", "Dedicado a Dennis Ritchie"],
        impact: "GRUB2 estandarizó bootloaders modernos; OpenStack impulsó cloud computing en Linux.",
        ux: "GRUB2 más flexible; reportes de problemas unificados en una sola interfaz.",
        tags: ["GRUB2", "OpenStack", "Cloud"]
    },
    {
        version: "Fedora 17",
        codename: "Beefy Miracle",
        year: "2012",
        date: "29 de mayo de 2012",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Fedora-17-GNOME-Desktop.png/960px-Fedora-17-GNOME-Desktop.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "UEFI integrado, GNOME 3.4, nueva estructura /usr, systemd-logind y USB pass-through.",
        features: ["Soporte UEFI integrado", "GNOME 3.4 con renderizado por software", "Nueva estructura de filesystem (/usr merge)", "systemd-logind reemplaza ConsoleKit", "USB pass-through en virt-manager", "KDE 4.8"],
        impact: "UEFI preparó para hardware moderno; reestructuración de filesystem influyó en FHS futuro.",
        ux: "Mejor soporte multiseat; USB pass-through en virtualización más sencillo.",
        tags: ["UEFI", "systemd", "/usr"]
    },
    {
        version: "Fedora 18",
        codename: "Spherical Cow",
        year: "2013",
        date: "15 de enero de 2013",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Fedora_18_with_GNOME.png/960px-Fedora_18_with_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "UEFI Secure Boot, Anaconda reescrito, FedUp, GNOME 3.6, MATE y Cinnamon incluidos.",
        features: ["Soporte UEFI Secure Boot", "Anaconda reescrito desde cero", "FedUp (actualización entre versiones)", "GNOME 3.6", "MATE y Cinnamon incluidos", "Actualizaciones offline con systemd"],
        impact: "FedUp permitió actualizaciones entre versiones mayores; Secure Boot aseguró arranque en hardware moderno.",
        ux: "Anaconda más intuitivo; actualizaciones offline sin interrumpir el trabajo.",
        tags: ["Secure Boot", "FedUp", "Anaconda"]
    },
    {
        version: "Fedora 19",
        codename: "Schrödinger's Cat",
        year: "2013",
        date: "2 de julio de 2013",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Fedora_19_with_GNOME.png/960px-Fedora_19_with_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Anaconda mejorado, GNOME 3.8, MariaDB reemplaza MySQL, GCC 4.8 y Developers Assistant.",
        features: ["Anaconda mejorado con aplicación de configuración inicial", "GNOME 3.8", "MariaDB reemplaza MySQL", "GCC 4.8", "Developers Assistant", "CRIU (checkpointing de aplicaciones)"],
        impact: "RHEL 7 basado en Fedora 19; MariaDB como alternativa libre a MySQL post-Oracle.",
        ux: "Aplicación de configuración inicial post-instalación; mejor soporte Active Directory.",
        tags: ["MariaDB", "RHEL 7", "DevAssistant"]
    },
    {
        version: "Fedora 20",
        codename: "Heisenbug",
        year: "2013",
        date: "17 de diciembre de 2013",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fedora_20_with_GNOME.png/960px-Fedora_20_with_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.10, ARM como arquitectura primaria, gnome-software. Última versión con nombre en código.",
        features: ["GNOME 3.10", "ARM como arquitectura primaria", "gnome-software (tienda de aplicaciones)", "Última versión con nombre en código", "KDE 4.11"],
        impact: "ARM expandió hardware soportado; gnome-software simplificó instalación de apps para usuarios.",
        ux: "gnome-software como 'tienda de aplicaciones' estilo moderno; fin de los nombres en código.",
        tags: ["ARM", "gnome-software", "Heisenbug"]
    },
    {
        version: "Fedora 21",
        codename: null,
        year: "2014",
        date: "9 de diciembre de 2014",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fedora_21_desktop_screenshot.png/960px-Fedora_21_desktop_screenshot.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Sin nombre en código; introducción de Fedora Editions (Workstation, Server, Cloud) y GNOME 3.14.",
        features: ["Sin nombre en código (primera vez)", "Fedora Editions: Workstation, Server, Cloud", "GNOME 3.14", "Logo moderno de Fedora", "Cada edición con propósito específico"],
        impact: "Modelo de ediciones permitió enfoques especializados; influyó en otras distribuciones Linux.",
        ux: "Workstation optimizado para escritorio; Server para producción empresarial; Cloud para AWS.",
        tags: ["Editions", "Workstation", "Cloud"]
    },
    {
        version: "Fedora 22",
        codename: null,
        year: "2015",
        date: "26 de mayo de 2015",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fedora_22_GNOME_activities_screenshot.png/960px-Fedora_22_GNOME_activities_screenshot.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "DNF reemplaza yum, GNOME 3.16, Wayland por defecto en GDM y notificaciones rediseñadas.",
        features: ["DNF reemplaza yum como gestor de paquetes", "GNOME 3.16 con notificaciones rediseñadas", "Wayland por defecto en GDM", "Scrollbars automáticas", "KDE 5.3"],
        impact: "DNF mejoró gestión de dependencias y velocidad; Wayland sentó bases para futuro gráfico de Linux.",
        ux: "Notificaciones rediseñadas; scrollbars automáticas; DNF más rápido que yum.",
        tags: ["DNF", "Wayland", "GNOME 3.16"]
    },
    {
        version: "Fedora 23",
        codename: null,
        year: "2015",
        date: "3 de noviembre de 2015",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Fedora_23_Workstation.png/960px-Fedora_23_Workstation.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.18, LibreOffice 5, FedUp integrado en DNF y Python 3 por defecto.",
        features: ["GNOME 3.18", "LibreOffice 5", "FedUp integrado en DNF", "Python 3 como intérprete por defecto", "KDE 5.4"],
        impact: "Python 3 como default adelantó transición en ecosistema Linux entero.",
        ux: "LibreOffice 5 más moderno; transición a Python 3 transparente para usuarios.",
        tags: ["Python 3", "LibreOffice 5", "GNOME 3.18"]
    },
    {
        version: "Fedora 24",
        codename: null,
        year: "2016",
        date: "21 de junio de 2016",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fedora_24.jpg/960px-Fedora_24.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.20, GCC 6, Python 3.5 y nueva fuente del sistema (tipografía renovada).",
        features: ["GNOME 3.20", "GCC 6", "Python 3.5", "Nueva fuente del sistema", "KDE 5.6"],
        impact: "GCC 6 mejoró optimizaciones; fuente moderna mejoró legibilidad en todo el sistema.",
        ux: "Tipografía renovada en todo el sistema; GNOME 3.20 más refinado visualmente.",
        tags: ["GCC 6", "Tipografía", "GNOME 3.20"]
    },
    {
        version: "Fedora 25",
        codename: null,
        year: "2016",
        date: "22 de noviembre de 2016",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/GNOME_Weather_3.22.jpeg/960px-GNOME_Weather_3.22.jpeg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Wayland por defecto en Workstation, Unicode 9, PHP 7, Node.js 6 e IBus Emoji.",
        features: ["Wayland por defecto en Workstation", "Unicode 9", "PHP 7.0", "Node.js 6", "IBus Emoji typing", "GNOME 3.22"],
        impact: "Wayland se volvió estándar en GNOME; mejor seguridad gráfica con aislamiento de clientes.",
        ux: "Emoji typing integrado; sesiones Wayland más fluidas y sin tearing.",
        tags: ["Wayland", "Emoji", "PHP 7"]
    },
    {
        version: "Fedora 26",
        codename: null,
        year: "2017",
        date: "11 de julio de 2017",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Fedora_26_gnome_shell.png/960px-Fedora_26_gnome_shell.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Mejoras de estabilidad, kernel 4.11, GNOME 3.24. Base para RHEL 8 en desarrollo.",
        features: ["Kernel Linux 4.11", "GNOME 3.24", "Mejoras generales de estabilidad", "KDE 5.10", "Python 3.6"],
        impact: "Base estable para el desarrollo de RHEL 8; mejoras en subsistemas internos.",
        ux: "Refinamientos en GNOME 3.24; experiencia más estable y pulida.",
        tags: ["Kernel 4.11", "RHEL 8", "Estabilidad"]
    },
    {
        version: "Fedora 27",
        codename: null,
        year: "2017",
        date: "14 de noviembre de 2017",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Fedora_27_gnome_shell.png/960px-Fedora_27_gnome_shell.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.26, LibreOffice 5.4, panel de configuración renovado y mejoras en red.",
        features: ["GNOME 3.26", "LibreOffice 5.4", "Panel de configuración renovado", "Mejoras en gestión de red y display", "Búsqueda del sistema mejorada"],
        impact: "Mejoras en gestión de red y display; Settings modernizado para usuarios.",
        ux: "Búsqueda del sistema con más resultados; Settings modernizado y más intuitivo.",
        tags: ["GNOME 3.26", "Settings", "LibreOffice 5.4"]
    },
    {
        version: "Fedora 28",
        codename: null,
        year: "2018",
        date: "1 de mayo de 2018",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Fedora_28_Desktop.jpg/960px-Fedora_28_Desktop.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Repositorios modulares, repositorios de terceros curados. RHEL 8 basado en Fedora 28.",
        features: ["Repositorios modulares (AppStream)", "Repositorios de terceros curados", "GNOME 3.28", "KDE 5.12", "Python 3.6"],
        impact: "Modularidad permitió múltiples versiones de software; RHEL 8 basado en Fedora 28.",
        ux: "Mejor gestión de software mediante módulos; instalación de apps de terceros más sencilla.",
        tags: ["Modularidad", "AppStream", "RHEL 8"]
    },
    {
        version: "Fedora 29",
        codename: null,
        year: "2018",
        date: "30 de octubre de 2018",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fedora_29_GNOME.png/960px-Fedora_29_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Modularidad en todas las variantes, AppStream, GNOME 3.30 y ZRAM en ARM.",
        features: ["Modularidad en todas las variantes", "AppStream estandarizado", "GNOME 3.30", "ZRAM en imágenes ARM", "Fedora Scientific Vagrant images"],
        impact: "AppStream estandarizó streams de aplicaciones; ZRAM mejoró rendimiento en ARM.",
        ux: "Mejor rendimiento en dispositivos ARM; más opciones de software modular.",
        tags: ["AppStream", "ZRAM", "Modular"]
    },
    {
        version: "Fedora 30",
        codename: null,
        year: "2019",
        date: "30 de abril de 2019",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Fedora_30.png/960px-Fedora_30.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.32, mejoras de rendimiento general, kernel 5.0 y experiencia más fluida.",
        features: ["GNOME 3.32 (mejor rendimiento)", "Kernel Linux 5.0", "Mejoras generales de rendimiento", "KDE 5.15", "Python 3.7"],
        impact: "Kernel 5.0 con mejoras de hardware; GNOME 3.32 significativamente más rápido.",
        ux: "GNOME más rápido y fluido; animaciones mejor optimizadas.",
        tags: ["GNOME 3.32", "Kernel 5.0", "Rendimiento"]
    },
    {
        version: "Fedora 31",
        codename: null,
        year: "2019",
        date: "29 de octubre de 2019",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Fedora_31_Desktop.png/960px-Fedora_31_Desktop.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.34, mejoras en rendimiento y energía, optimizaciones para laptops.",
        features: ["GNOME 3.34", "Mejoras en rendimiento y energía", "Optimizaciones para laptops", "Kernel 5.3", "KDE 5.16"],
        impact: "Optimizaciones específicas para laptops; mejor gestión energética.",
        ux: "Gestión de energía mejorada; mejor duración de batería en portátiles.",
        tags: ["GNOME 3.34", "Energía", "Laptops"]
    },
    {
        version: "Fedora 32",
        codename: null,
        year: "2020",
        date: "28 de abril de 2020",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fedora_32_GNOME_desktop.png/960px-Fedora_32_GNOME_desktop.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 3.36, kernel 5.6, mejoras en seguridad y EarlyOOM para gestión de memoria.",
        features: ["GNOME 3.36", "Kernel Linux 5.6", "Mejoras en seguridad", "EarlyOOM (gestión de memoria)", "KDE 5.18"],
        impact: "Seguridad reforzada por defecto; EarlyOOM evita bloqueos por falta de RAM.",
        ux: "GNOME 3.36 con mejor rendimiento; bloqueo de pantalla mejorado.",
        tags: ["GNOME 3.36", "Seguridad", "EarlyOOM"]
    },
    {
        version: "Fedora 33",
        codename: null,
        year: "2020",
        date: "27 de octubre de 2020",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/VirtualBox_Fedora_Workstation_33b_21_03_2021_19_55_14.png/960px-VirtualBox_Fedora_Workstation_33b_21_03_2021_19_55_14.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "Btrfs por defecto, zram en lugar de swap, GNOME 3.38, nano por defecto y Fedora IoT oficial.",
        features: ["Btrfs por defecto (snapshots y checksums)", "zram en lugar de swap partition", "GNOME 3.38", "Kernel 5.8", "nano por defecto (reemplaza vi)", "Fedora IoT como edición oficial"],
        impact: "Btrfs con snapshots y checksums mejoró integridad; zram optimizó uso de memoria.",
        ux: "Fondo de escritorio dinámico (slideshow de la Tierra); nano más amigable que vi.",
        tags: ["Btrfs", "zram", "IoT"]
    },
    {
        version: "Fedora 34",
        codename: null,
        year: "2021",
        date: "27 de abril de 2021",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fedora_34_GNOME_Desktop_Day_en.png/960px-Fedora_34_GNOME_Desktop_Day_en.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 40, compresión Btrfs por defecto, PipeWire exclusivo y KDE Plasma en Wayland.",
        features: ["GNOME 40 (nuevo layout horizontal)", "Compresión de filesystem Btrfs por defecto", "PipeWire exclusivo (audio/video)", "KDE Plasma en Wayland por defecto", "Kernel 5.11"],
        impact: "RHEL 9 basado en Fedora 34; PipeWire unificó audio y video en Linux.",
        ux: "GNOME 40 con nuevo layout (dock inferior, overview horizontal); PipeWire para audio profesional.",
        tags: ["GNOME 40", "PipeWire", "RHEL 9"]
    },
    {
        version: "Fedora 35",
        codename: null,
        year: "2021",
        date: "2 de noviembre de 2021",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Fedora_Workstation_35.png/960px-Fedora_Workstation_35.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 41, kernel 5.14, mejoras en PipeWire y refinamientos generales del sistema.",
        features: ["GNOME 41", "Kernel Linux 5.14", "Mejoras en PipeWire", "KDE 5.22", "Python 3.10"],
        impact: "PipeWire maduro para audio profesional; mejoras en subsistemas de red.",
        ux: "GNOME 41 más refinado; conexiones Bluetooth más estables.",
        tags: ["GNOME 41", "PipeWire", "Kernel 5.14"]
    },
    {
        version: "Fedora 36",
        codename: null,
        year: "2022",
        date: "10 de mayo de 2022",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fedora_36_workstation_default_appearance.png/960px-Fedora_36_workstation_default_appearance.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 42, kernel 5.17, mejoras en seguridad y accesibilidad del escritorio.",
        features: ["GNOME 42 (modo oscuro mejorado)", "Kernel Linux 5.17", "Mejoras en seguridad", "Mejoras en accesibilidad", "KDE 5.24"],
        impact: "Seguridad reforzada con medidas adicionales; mejoras en stack gráfico.",
        ux: "GNOME 42 con mejor accesibilidad; modo oscuro consistente en apps.",
        tags: ["GNOME 42", "Accesibilidad", "Seguridad"]
    },
    {
        version: "Fedora 37",
        codename: null,
        year: "2022",
        date: "15 de noviembre de 2022",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Screenshot_from_2022-11-27_14-51-20.png/960px-Screenshot_from_2022-11-27_14-51-20.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 43, kernel 6.0, mejoras en rendimiento y nuevo diseño de apps principales.",
        features: ["GNOME 43 (Quick Settings renovados)", "Kernel Linux 6.0", "Mejoras en rendimiento", "KDE 5.26", "Python 3.11"],
        impact: "Kernel 6.0 con soporte de hardware reciente; mejoras en scheduler.",
        ux: "GNOME 43 más rápido; Quick Settings rediseñados; apps principales con nuevo diseño.",
        tags: ["GNOME 43", "Kernel 6.0", "Quick Settings"]
    },
    {
        version: "Fedora 38",
        codename: null,
        year: "2023",
        date: "18 de abril de 2023",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fedora_38_GNOME.png/960px-Fedora_38_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 44, kernel 6.2, mejoras en DNF y gestión de ventanas mejorada.",
        features: ["GNOME 44 (mejor gestión de ventanas)", "Kernel Linux 6.2", "Mejoras en DNF", "KDE 5.27", "Python 3.11"],
        impact: "DNF más rápido y eficiente; kernel 6.2 con mejor soporte de hardware nuevo.",
        ux: "GNOME 44 con mejor gestión de ventanas; fondos de pantalla mejorados.",
        tags: ["GNOME 44", "DNF", "Kernel 6.2"]
    },
    {
        version: "Fedora 39",
        codename: null,
        year: "2023",
        date: "7 de noviembre de 2023",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fedora_39_GNOME.png/960px-Fedora_39_GNOME.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 45, kernel 6.5, mejoras en seguridad y rendimiento general del sistema.",
        features: ["GNOME 45 (nueva barra de actividades)", "Kernel Linux 6.5", "Mejoras en seguridad", "KDE 5.27", "Python 3.12"],
        impact: "Seguridad mejorada por defecto; mejoras en subsistemas de red y almacenamiento.",
        ux: "GNOME 45 con mejor rendimiento; nueva barra de actividades más limpia.",
        tags: ["GNOME 45", "Kernel 6.5", "Seguridad"]
    },
    {
        version: "Fedora 40",
        codename: null,
        year: "2024",
        date: "23 de abril de 2024",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Fedora_Workstation_40.png/960px-Fedora_Workstation_40.png?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        preview: "GNOME 46, kernel 6.8, DNF 5 en desarrollo y mejoras en flujo de trabajo.",
        features: ["GNOME 46 (mejoras en Nautilus)", "Kernel Linux 6.8", "DNF 5 en desarrollo", "KDE 6.0", "Python 3.12"],
        impact: "DNF 5 mejoró gestión de paquetes; kernel 6.8 con soporte de hardware de última generación.",
        ux: "GNOME 46 más fluido; Nautilus con mejoras significativas.",
        tags: ["GNOME 46", "DNF 5", "Kernel 6.8"]
    },
    {
        version: "Fedora 41",
        codename: null,
        year: "2024",
        date: "29 de octubre de 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTljp80OTRjT3ZlIclXzZybnPfMryVguHJsuir4kNpHx6usm7xxTfwJtZ&s=10",
        preview: "GNOME 47, kernel 6.11, mejoras en seguridad, rendimiento y accesibilidad.",
        features: ["GNOME 47 (mejoras en accesibilidad)", "Kernel Linux 6.11", "Mejoras en seguridad y rendimiento", "KDE 6.1", "Python 3.13"],
        impact: "Base para futuras versiones de RHEL; mejoras en seguridad por defecto.",
        ux: "GNOME 47 con mejor accesibilidad; mejor soporte para pantallas HDR.",
        tags: ["GNOME 47", "Kernel 6.11", "HDR"]
    },
    {
        version: "Fedora 42",
        codename: "Adams",
        year: "2025",
        date: "15 de abril de 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDb_AMPNGo_zOoG-iEORM-zU1ft8sJEwKgNArH0lFJicHHFhwqO6l3-2o&s=10",
        preview: "KDE Plasma promovido a edición oficial, GNOME 48, kernel 6.14. Nombre en código de regreso.",
        features: ["KDE Plasma promovido a edición oficial (igual que Workstation)", "GNOME 48", "Kernel Linux 6.14", "KDE Plasma 6", "Nombre en código 'Adams' (retorno)", "Python 3.13"],
        impact: "KDE como primera clase reconoció su adopción masiva; nombre en código de regreso como homenaje.",
        ux: "KDE Plasma 6 moderno como opción principal; GNOME 48 con mejoras en productividad.",
        tags: ["KDE Edition", "GNOME 48", "Adams"]
    },
    {
        version: "Fedora 43",
        codename: null,
        year: "2025",
        date: "28 de octubre de 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt6Rrasy8JVdp5uUr4O7qqts4LHvAEgFv-mRi5pKp-08YVnH2Cs0pppFb&s=10",
        preview: "GNOME 49, kernel 6.17, DNF 5 maduro, GCC 15.2, Python 3.14 y soporte para Hare.",
        features: ["GNOME 49", "Kernel Linux 6.17", "DNF 5 maduro para producción", "GCC 15.2, glibc 2.42", "Python 3.14", "Soporte para lenguaje Hare", "LLVM 21"],
        impact: "DNF 5 maduro para producción; soporte para nuevos lenguajes de programación.",
        ux: "GNOME 49 refinado; mejoras en rendimiento de escritorio.",
        tags: ["GNOME 49", "DNF 5", "Hare"]
    },
    {
        version: "Fedora 44",
        codename: null,
        year: "2026",
        date: "28 de abril de 2026",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqHE63K0QHSmtqlfMXKUN_F2HPEoZILAcapOKLk2hdZmKYp6X58e-nHah&s=10",
        preview: "Python 3.14.4, C++26, C23, kernel 7.1, GNOME 50, DNF 5 por defecto e instalador WebUI.",
        features: ["Python 3.14.4", "C++26 y C23", "Kernel Linux 7.1", "GNOME 50", "DNF 5 por defecto", "Instalador WebUI basado en navegador", "KDE 6.6"],
        impact: "Soporte para estándares de lenguaje más recientes; kernel 7.1 con hardware de última generación.",
        ux: "GNOME 50 con mejoras en productividad y accesibilidad; instalador WebUI moderno en Workstation.",
        tags: ["GNOME 50", "Kernel 7.1", "WebUI", "C++26"]
    }
];

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    renderTimeline();
    initScrollObserver();
    initModal();
    initNavigation();
    initProgressBar();
    initKeyboardNav();
});

// ============================================
// PARTÍCULAS DECORATIVAS
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 20) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ============================================
// RENDERIZAR TIMELINE
// ============================================
function renderTimeline() {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    timelineData.forEach((item, index) => {
        const card = createTimelineCard(item, index);
        track.appendChild(card);
    });
}

function createTimelineCard(item, index) {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.dataset.index = index;

    const codenameText = item.codename ? `«${item.codename}»` : '';
    const tagsHtml = item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
    
    // Usa la imagen individual de cada versión
    const imageHtml = item.image 
        ? `<div class="card-image"><img src="${item.image}" alt="Escritorio ${item.version}" loading="lazy"></div>` 
        : '';

    div.innerHTML = `
        <div class="timeline-card" onclick="openModal(${index})">
            ${imageHtml}
            <div class="card-header">
                <span class="card-version">${item.version}</span>
                <span class="card-year">${item.year}</span>
            </div>
            <h3 class="card-title">${item.version}</h3>
            ${codenameText ? `<p class="card-codename">${codenameText}</p>` : ''}
            <p class="card-preview">${item.preview}</p>
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <div class="card-arrow">→</div>
        </div>
        <div class="timeline-connector"></div>
        <div class="timeline-dot"></div>
    `;

    return div;
}

// ============================================
// SCROLL OBSERVER
// ============================================
function initScrollObserver() {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { root: track, threshold: 0.3 });
    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
}

// ============================================
// MODAL
// ============================================
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal(index) {
    const item = timelineData[index];
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');

    const codenameHtml = item.codename 
        ? `<p class="modal-codename">«${item.codename}»</p>` 
        : '<p class="modal-codename">Sin nombre en código</p>';
    const featuresHtml = item.features.map(f => `<li>${f}</li>`).join('');
    
    // Imagen grande en el modal (usando la misma URL individual)
    const modalImageHtml = item.image 
        ? `<div class="modal-image-full"><img src="${item.image}" alt="Escritorio ${item.version}"></div>` 
        : '';

    content.innerHTML = `
        ${modalImageHtml}
        <div class="modal-header">
            <span class="modal-version-badge">${item.version}</span>
            <h2 class="modal-title">${item.version}</h2>
            ${codenameHtml}
            <p class="modal-date"> ${item.date}</p>
        </div>
        <div class="modal-section">
            <h3 class="modal-section-title">Resumen</h3>
            <p class="modal-text">${item.preview}</p>
        </div>
        <div class="modal-section">
            <h3 class="modal-section-title">Características principales</h3>
            <ul class="modal-list">${featuresHtml}</ul>
        </div>
        <div class="modal-section">
            <h3 class="modal-section-title">Impacto en el desarrollo</h3>
            <div class="modal-impact"><p>${item.impact}</p></div>
        </div>
        <div class="modal-section">
            <h3 class="modal-section-title">Cambios en UX / Interfaz</h3>
            <p class="modal-text">${item.ux}</p>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// NAVEGACIÓN
// ============================================
let currentIndex = 0;

function initNavigation() {
    const track = document.getElementById('timelineTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    if (!track || !btnPrev || !btnNext) return;
    btnPrev.addEventListener('click', () => navigate(-1));
    btnNext.addEventListener('click', () => navigate(1));
    track.addEventListener('scroll', () => updateCurrentIndex());
}

function navigate(direction) {
    const track = document.getElementById('timelineTrack');
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;
    currentIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
    const targetItem = items[currentIndex];
    const trackRect = track.getBoundingClientRect();
    const itemRect = targetItem.getBoundingClientRect();
    const scrollLeft = track.scrollLeft + (itemRect.left - trackRect.left) - (trackRect.width / 2) + (itemRect.width / 2);
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
}

function updateCurrentIndex() {
    const track = document.getElementById('timelineTrack');
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length || !track) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0, closestDistance = Infinity;
    items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(trackCenter - itemCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });
    currentIndex = closestIndex;
}

// ============================================
// BARRA DE PROGRESO
// ============================================
function initProgressBar() {
    const track = document.getElementById('timelineTrack');
    const bar = document.getElementById('progressBar');
    if (!track || !bar) return;
    track.addEventListener('scroll', () => {
        const scrollWidth = track.scrollWidth - track.clientWidth;
        const scrolled = track.scrollLeft;
        const progress = scrollWidth > 0 ? (scrolled / scrollWidth) * 100 : 0;
        bar.style.width = progress + '%';
    });
}

// ============================================
// NAVEGACIÓN CON TECLADO
// ============================================
function initKeyboardNav() {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('.modal-overlay.active')) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch(e.key) {
            case 'ArrowRight': case 'ArrowDown': e.preventDefault(); navigate(1); break;
            case 'ArrowLeft': case 'ArrowUp': e.preventDefault(); navigate(-1); break;
            case 'Home': e.preventDefault(); currentIndex = 0; navigate(0); break;
            case 'End': e.preventDefault(); currentIndex = timelineData.length - 1; navigate(0); break;
        }
    });
}

// ============================================
// SCROLL HORIZONTAL CON RUEDA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    track.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            track.scrollLeft += e.deltaY;
        }
    }, { passive: false });
});

// ============================================
// TOUCH/SWIPE
// ============================================
let touchStartX = 0, touchEndX = 0;
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    track.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', (e) => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });
});
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
        diff > 0 ? navigate(1) : navigate(-1);
    }
}