var categories = {
    'platform': {
        title: 'AIP features',
        description: 'Platform applications & components'
    },
    'technology': {
        title: 'Technologies & Frameworks',
        description: 'Extend the scope of Technologies & Frameworks'
    },
    'assessment': {
        title: 'Assessment models',
        description: 'Extend the assessment model with additional indexes'
    },
    'rules': {
        title: 'More rules',
        description: 'Extend the assessment model with technologies specific rules and metrics'
    },    
    'reporting': {
        title: 'Reporting',
        description: 'Extend the reporting capabilities of the platform'
    },
    'analysis': {
        title: 'Analysis helpers',
        description: 'Utilities for a better analysis support'
    },
    'dataflow': {
        title: 'Security analysis',
        description: 'Utilities and blackboxes for dataflow based analysis'
    },
    'delivery': {
        title: 'Delivery',
        description: 'Delivery Manager Tool plugins and utilities'
    },
    'training': {
        title: 'Training',
        description: 'Examples to create custom quality rules with the Python SDK and the Metrics Compiler'
    },
}; 

var extensionsDirectory = {
    "com.castsoftware.labs.train.sdk.cpp.diags"                   : "training",
    "com.castsoftware.labs.train.sdk.diags"                       : "training",
    "com.castsoftware.labs.train.sdk.jee.qr"                      : "training",
    "com.castsoftware.labs.train.sdk.ua.batch"                    : "training",


    "com.castsoftware.labs.dataflow.extensions.collector"         : "dataflow",
    "com.castsoftware.labs.dataflow.for.apache.struts"            : "dataflow",
    "com.castsoftware.labs.dataflow.for.jsf"                      : "dataflow",
    "com.castsoftware.labs.dataflow.for.keycloak"                 : "dataflow",
    "com.castsoftware.labs.dataflow.for.sql.sanitization"         : "dataflow",
    "com.castsoftware.labs.dataflow.sme.kit"                      : "dataflow",
    "com.castsoftware.labs.HF.System.out.println.blackboxes"      : "dataflow",
    "com.castsoftware.labs.sendcrypto.blackboxes"                 : "dataflow",    
    "com.castsoftware.uc.apache.httpclient.blackboxes"            : "dataflow",
    "com.castsoftware.uc.http.response.splitting.blackboxes"      : "dataflow",
    "com.castsoftware.uc.http.response.splitting.new.blackboxes"  : "dataflow",
    "com.castsoftware.uc.ibm.mq.blackboxes"                       : "dataflow",
    "com.castsoftware.uc.jms.blackboxes"                          : "dataflow",
    "com.castsoftware.uc.log4net.blackboxes"                      : "dataflow",
    "com.castsoftware.uc.ms.enterprise.library.blackboxes"        : "dataflow",
    "com.castsoftware.uc.msmq.blackboxes"                         : "dataflow",
    "com.castsoftware.uc.nlog.blackboxes"                         : "dataflow",
    "com.castsoftware.uc.sendcredentials.blackboxes"              : "dataflow",
    "com.castsoftware.uc.serilog.blackboxes"                      : "dataflow",
    "com.castsoftware.uc.slf4j.blackboxes"                        : "dataflow",
    "com.castsoftware.securityforjava"                            : "dataflow",    


    "com.castsoftware.automaticlinksvalidator"                    : "analysis",
    "com.castsoftware.awsjava"                                    : "analysis",
    "com.castsoftware.datacolumnaccess"                           : "analysis",
    "com.castsoftware.deltatool"                                  : "analysis",
    "com.castsoftware.deltatooldoc"                               : "analysis",   
    "com.castsoftware.labs.3rdparty.csv.integration"              : "analysis",
    "com.castsoftware.labs.analysisconfigurationkit"              : "analysis",
    "com.castsoftware.labs.cobol.swcopy.update"                   : "analysis",
    "com.castsoftware.labs.ctl.link"                              : "analysis",
    "com.castsoftware.labs.deltareportsnapshot"                   : "analysis",
    "com.castsoftware.labs.genericReflink"                        : "analysis",
    "com.castsoftware.labs.gorgondb"                              : "analysis",
    "com.castsoftware.labs.jcl.to.java"                           : "analysis",
    "com.castsoftware.labs.jcl.to.pl1"                            : "analysis",
    "com.castsoftware.labs.jcl.to.sql"                            : "analysis",
    "com.castsoftware.labs.jee.missingtable"                      : "analysis",
    "com.castsoftware.labs.tools.contentenrichmentmigrator"       : "analysis",
    "com.castsoftware.labs.tools.environmentprofilemigrator"      : "analysis",
    "com.castsoftware.labs.tools.externalmarker"                  : "analysis",
    "com.castsoftware.labs.tools.pathbasedmodulegenerator"        : "analysis",
    "com.castsoftware.labs.transactioncompletenesskit"            : "analysis",
    "com.castsoftware.uc.AnalysisCompletenessReport"              : "analysis",
    "com.castsoftware.uc.AppBoundariesEntry-EndPoints"            : "analysis",
    "com.castsoftware.uc.DLMRule"                                 : "analysis",
    "com.castsoftware.uc.FindMissingJavaCode"                     : "analysis",
    "com.castsoftware.uc.MissingLinkTransaction"                  : "analysis",
    "com.castsoftware.uc.PerlExternalLinks"                       : "analysis",
    "com.castsoftware.uc.TransactionCompleteness"                 : "analysis",
    "com.castsoftware.uc.analysisconfiguration"                   : "analysis",
    "com.castsoftware.uc.ari"                                     : "analysis",
    "com.castsoftware.uc.artifactsnotinmodulesreport"             : "analysis",
    "com.castsoftware.uc.calibration"                             : "analysis",
    "com.castsoftware.uc.castbackupper"                           : "analysis",
    "com.castsoftware.uc.costcontrol.upgrade"                     : "analysis",
    "com.castsoftware.uc.cvm.csv.integration"                     : "analysis",    
    "com.castsoftware.uc.datacollection"                          : "analysis",
    "com.castsoftware.uc.dlmvalidation"                           : "analysis",
    "com.castsoftware.uc.ect"                                     : "analysis",
    "com.castsoftware.uc.fpvalidation"                            : "analysis",
    "com.castsoftware.uc.hraccess"                                : "analysis",
    "com.castsoftware.uc.jee.envprofiles"                         : "analysis",
    "com.castsoftware.uc.largesccreport"                          : "analysis",
    "com.castsoftware.uc.lombok.documentation"                    : "analysis",
    "com.castsoftware.uc.lombok.inventory"                        : "analysis",
    "com.castsoftware.uc.moduleoverlapreport"                     : "analysis",
    "com.castsoftware.uc.modulevalidation"                        : "analysis",
    "com.castsoftware.uc.ost"                                     : "analysis",
    "com.castsoftware.uc.rescanaudit"                             : "analysis",
    "com.castsoftware.uc.rescanvalidate"                          : "analysis",
    "com.castsoftware.uc.resultvalidation"                        : "analysis",
    "com.castsoftware.uc.suspiciouscodeincentralreport"           : "analysis",
    "com.castsoftware.uc.telon"                                   : "analysis",
    "com.castsoftware.uc.transactioncalibrationkit"               : "analysis",
    "com.castsoftware.wbslinker"                                  : "analysis",
    

    "com.castsoftware.cisq-index"                                 : "assessment",
    "com.castsoftware.greenit"                                    : "assessment",
    "com.castsoftware.labs.cloud"                                 : "assessment",
    "com.castsoftware.labs.digital-ready"                         : "assessment",
    "com.castsoftware.labs.green"                                 : "assessment",
    "com.castsoftware.labs.hai"                                   : "assessment",
    "com.castsoftware.labs.slrex"                                 : "assessment",
    "com.castsoftware.mips-redux-index"                           : "assessment",
    "com.castsoftware.omg-ascqm-index"                            : "assessment",
    "com.castsoftware.omg-atdm"                                   : "assessment",
    "com.castsoftware.owasp-index"                                : "assessment",
    "com.castsoftware.qualitystandards"                           : "assessment",
    
    "com.castsoftware.uc.security.custom.rules"                   : "rules",
    "com.castsoftware.uc.cwe"                                     : "rules",
    "com.castsoftware.uc.spdb.cpecqr"                             : "rules",
    "com.castsoftware.uc.COMCloudRule"                            : "rules",
    "com.castsoftware.uc.pl1.custom.rules"                        : "rules",    
    "com.castsoftware.uc.peoplesoft.security"                     : "rules",
    "com.castsoftware.uc.peoplesoft.delta.size"                   : "rules",
    "com.castsoftware.uc.cwe4fda"                                 : "rules",    
    "com.castsoftware.uc.dotNetRules"                             : "rules",
    "com.castsoftware.uc.jee.qr.infinite.loops"                   : "rules",    
    "com.castsoftware.systemlevelrules"                           : "rules",
    "com.castsoftware.uc.architecturecheckerruleKit"              : "rules",    
    "com.castsoftware.labs.system-level.t-rules"                  : "rules", 
    "com.castsoftware.labs.system-level.xxshared"                 : "rules",    
    
    "com.castsoftware.aip"                                        : "platform",
    "com.castsoftware.aipsecurity"                                : "platform",
    "com.castsoftware.aip.archichecker"                           : "platform",
    "com.castsoftware.aip.console"                                : "platform",
    "com.castsoftware.aip.console.tools"                          : "platform",
    "com.castsoftware.aip.dashboard"                              : "platform",
    "com.castsoftware.aip.dashboard.engineering"                  : "platform",
    "com.castsoftware.aip.dashboard.health"                       : "platform",
    "com.castsoftware.aip.dashboard.security"                     : "platform",
    "com.castsoftware.aip.extendservice"                          : "platform",
    "com.castsoftware.aip.reportgenerator"                        : "platform",
    "com.castsoftware.aip.reportgeneratorfordashboard"            : "platform",
    "com.castsoftware.imaging"                                    : "platform",
    "com.castsoftware.internal.platform"                          : "platform",
    "com.castsoftware.uc.aip.console.tools"                       : "platform",
    "com.castsoftware.uc.castSLA"                                 : "platform",
    "com.castsoftware.xset"                                       : "platform",
    
    
    "com.castsoftware.aip.datamart"                               : "reporting",
    "com.castsoftware.labs.templates.for.report.generator"        : "reporting",
    "com.castsoftware.uc.aip2hl"                                  : "reporting",    
    "com.castsoftware.uc.ContinuousImprovementReport"             : "reporting",
    "com.castsoftware.uc.GenericReport"                           : "reporting",
    "com.castsoftware.uc.NewViolationsReport"                     : "reporting",
    "com.castsoftware.uc.aepreport"                               : "reporting",
    "com.castsoftware.uc.analytics.aar"                           : "reporting",
    "com.castsoftware.uc.analytics.aar_engine"                    : "reporting",
    "com.castsoftware.uc.analytics.datapond"                      : "reporting",
    "com.castsoftware.uc.cast2jira"                               : "reporting",
    "com.castsoftware.uc.kyt"                                     : "reporting",
    "com.castsoftware.uc.nuggets-finder"                          : "reporting",
    "com.castsoftware.uc.qualitycubereport"                       : "reporting",
    "com.castsoftware.uc.restapi.excelreports"                    : "reporting",
    "com.castsoftware.uc.simulatorgenerator"                      : "reporting",
    "com.castsoftware.uc.violationextraction"                     : "reporting",
    
    "com.castsoftware.labs.mainframe.missing.sources"             : "delivery",    
    "com.castsoftware.uc.checkanalysiscompleteness"               : "delivery",    
    "com.castsoftware.JEE-MavenHttp"                              : "delivery",
    "com.castsoftware.aip.extractor.bo"                           : "delivery",
    "com.castsoftware.aip.extractor.sap"                          : "delivery",
    "com.castsoftware.dmtboextractiondiscoverer"                  : "delivery",
    "com.castsoftware.dmtcfilediscoverer"                         : "delivery",
    "com.castsoftware.dmtcppcompilationdatabasediscoverer"        : "delivery",
    "com.castsoftware.dmtcvsextractor"                            : "delivery",
    "com.castsoftware.dmtgitextractor"                            : "delivery",
    "com.castsoftware.dmtjeefilediscoverer"                       : "delivery",
    "com.castsoftware.dmtjeegradlediscoverer"                     : "delivery",
    "com.castsoftware.dmtjeemanifestdiscoverer"                   : "delivery",
    "com.castsoftware.dmtjeenetbeansdiscoverer"                   : "delivery",
    "com.castsoftware.dmtmavenbuildextractor"                     : "delivery",
    "com.castsoftware.dmtxcodediscoverer"                         : "delivery",
    "com.castsoftware.dmtxmlscanner"                              : "delivery",
    "com.castsoftware.labs.cobol.missingtable"                    : "delivery",
    "com.castsoftware.labs.ctl.discover"                          : "delivery",
    "com.castsoftware.labs.tools.deliveryfolderconsistencychecker": "delivery",
    "com.castsoftware.labs.tools.deliveryplugincleaner"           : "delivery",
    "com.castsoftware.uc.DMTExplore"                              : "delivery",
    "com.castsoftware.uc.DeliveryAlertsReport"                    : "delivery",
    "com.castsoftware.uc.castdeliverytrigger"                     : "delivery",
    "com.castsoftware.uc.dmtjeebeadiscoverer"                     : "delivery",
    "com.castsoftware.uc.endevor-extractor"                       : "delivery",
    "com.castsoftware.uc.filesearcher"                            : "delivery",    
    "com.castsoftware.uc.mainframeconnector"                      : "delivery",
    "com.castsoftware.uc.rapiddiscoveryreport"                    : "delivery",
    "com.castsoftware.webfilesdiscoverer"                         : "delivery",
    "com.castsoftware.labs.tools.versionorganizer"                : "delivery",    
    
    

    "com.castsoftware.android"                                    : "technology",
    "com.castsoftware.angularjs"                                  : "technology",
    "com.castsoftware.asp"                                        : "technology",
    "com.castsoftware.bpel"                                       : "technology",
    "com.castsoftware.businessobject"                             : "technology",
    "com.castsoftware.cfamily"                                    : "technology",
    "com.castsoftware.cpp"                                        : "technology",
    "com.castsoftware.dotnet"                                     : "technology",
    "com.castsoftware.dotnetweb"                                  : "technology",
    "com.castsoftware.ead4j"                                      : "technology",
    "com.castsoftware.egl"                                        : "technology",
    "com.castsoftware.entity"                                     : "technology",
    "com.castsoftware.flex"                                       : "technology",
    "com.castsoftware.fortran"                                    : "technology",
    "com.castsoftware.html5"                                      : "technology",
    "com.castsoftware.ibatis"                                     : "technology",
    "com.castsoftware.ios"                                        : "technology",
    "com.castsoftware.jaxrs"                                      : "technology",
    "com.castsoftware.jaxws"                                      : "technology",
    "com.castsoftware.jee"                                        : "technology",
    "com.castsoftware.jeerules"                                   : "technology",
    "com.castsoftware.jquery"                                     : "technology",
    "com.castsoftware.kotlin"                                     : "technology",
    "com.castsoftware.labs.TalendMetaDataAnalyzer"                : "technology",
    "com.castsoftware.labs.apache.kafka"                          : "technology",
    "com.castsoftware.labs.gosu"                                  : "technology",
    "com.castsoftware.labs.spring.integration"                    : "technology",
    "com.castsoftware.labs.zos.basesas"                           : "technology",
    "com.castsoftware.mqe"                                        : "technology",
    "com.castsoftware.nodejs"                                     : "technology",
    "com.castsoftware.nosqldotnet"                                : "technology",
    "com.castsoftware.nosqljava"                                  : "technology",
    "com.castsoftware.peoplesoft"                                 : "technology",
    "com.castsoftware.php"                                        : "technology",
    "com.castsoftware.pl1"                                        : "technology",
    "com.castsoftware.python"                                     : "technology",
    "com.castsoftware.reactjs"                                    : "technology",
    "com.castsoftware.rpg"                                        : "technology",
    "com.castsoftware.sap.hybris"                                 : "technology",
    "com.castsoftware.sapui5"                                     : "technology",
    "com.castsoftware.shell"                                      : "technology",
    "com.castsoftware.siebel"                                     : "technology",
    "com.castsoftware.silverlight"                                : "technology",
    "com.castsoftware.springbatch"                                : "technology",
    "com.castsoftware.springdata"                                 : "technology",
    "com.castsoftware.springmvc"                                  : "technology",
    "com.castsoftware.springsecurity"                             : "technology",
    "com.castsoftware.springwebflow"                              : "technology",
    "com.castsoftware.sqlanalyzer"                                : "technology",
    "com.castsoftware.struts"                                     : "technology",
    "com.castsoftware.swift"                                      : "technology",
    "com.castsoftware.tibco"                                      : "technology",
    "com.castsoftware.typescript"                                 : "technology",
    "com.castsoftware.uc.ColdFusion"                              : "technology",
    "com.castsoftware.uc.Perl"                                    : "technology",
    "com.castsoftware.uc.Progress"                                : "technology",
    "com.castsoftware.uc.apache.wicket"                           : "technology",
    "com.castsoftware.uc.apachetiles"                             : "technology",
    "com.castsoftware.uc.asmzos"                                  : "technology",
    "com.castsoftware.uc.birt"                                    : "technology",
    "com.castsoftware.uc.ca7"                                     : "technology",
    "com.castsoftware.uc.caideal"                                 : "technology",
    "com.castsoftware.uc.cognos"                                  : "technology",
    "com.castsoftware.uc.datastage"                               : "technology",
    "com.castsoftware.uc.easytrieve"                              : "technology",
    "com.castsoftware.uc.imsdc"                                   : "technology",
    "com.castsoftware.uc.informix.db"                             : "technology",
    "com.castsoftware.uc.informix4gl"                             : "technology",
    "com.castsoftware.uc.ingres"                                  : "technology",
    "com.castsoftware.uc.jBPM"                                    : "technology",
    "com.castsoftware.uc.jasperreports"                           : "technology",
    "com.castsoftware.uc.jboss.drools"                            : "technology",
    "com.castsoftware.uc.liferay"                                 : "technology",
    "com.castsoftware.uc.natural.adabas"                          : "technology",
    "com.castsoftware.uc.pacbase"                                 : "technology",
    "com.castsoftware.uc.php.doctrine"                            : "technology",
    "com.castsoftware.uc.powercenter"                             : "technology",
    "com.castsoftware.uc.rdl"                                     : "technology",
    "com.castsoftware.uc.remedy.ars"                              : "technology",
    "com.castsoftware.uc.resteasy"                                : "technology",
    "com.castsoftware.uc.springbatch"                             : "technology",
    "com.castsoftware.uc.springwebflow"                           : "technology",
    "com.castsoftware.uc.sqr"                                     : "technology",
    "com.castsoftware.uc.teradata"                                : "technology",
    "com.castsoftware.uc.xpdl"                                    : "technology",
    "com.castsoftware.uc.xquery"                                  : "technology",
    "com.castsoftware.uc.xslt"                                    : "technology",
    "com.castsoftware.vuejs"                                      : "technology",
    "com.castsoftware.wcf"                                        : "technology",
    "com.castsoftware.wpf"                                        : "technology",


    "com.castsoftware.labs.db2.manifest.to.ddl"                   : "analysis",
    "com.castsoftware.labs.jcl.to.shell"                          : "analysis",
    "com.castsoftware.labs.jee.EclipseLinkJPA"                    : "analysis",
    "com.castsoftware.uc.imagingeligibilitytool"                  : "analysis",
    "com.castsoftware.uc.microsoft.practices.prism"               : "analysis",
    "com.castsoftware.java.service"                               : "analysis",
    

    "com.castsoftware.labs.deltareportdocsnapshot"                : "deprecated",
    "com.castsoftware.labs.aep.dataentities"                      : "deprecated",
    "com.castsoftware.uc.oraclebpel"                              : "deprecated",
    "com.castsoftware.labs.shelllinkjava"                         : "deprecated",
    "com.castsoftware.uc.ibatis"                                  : "deprecated",
    "com.castsoftware.labs.mips-redux"                            : "deprecated",
    "com.castsoftware.labs.aep.transactions"                      : "deprecated",
    "com.castsoftware.labs.shelllinkperl"                         : "deprecated",
    "com.castsoftware.labs.transactionconfigurationkit"           : "deprecated",        
    "com.castsoftware.labs.deltareportanalysis"                   : "deprecated",
    "com.castsoftware.uc.bpel"                                    : "deprecated",    
}


