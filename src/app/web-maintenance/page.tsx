import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import WebMaintenanceItem from "@/components/developement/WebDev/WebMaintenance";

const WebMaintenance = () => {
  return (
    <>
      <Metadata
        title="Web Maintenance Solutions | JSmatrix"
        keywords="web maintenance, website maintenance, website support, website updates, website security, site optimization, website monitoring, website backups, website performance, web maintenance services, website management, CMS updates, website troubleshooting, website bug fixing, website enhancement, web hosting support, website uptime monitoring, website optimization services, website upgrade, web development support"
        description="Keep your website secure, updated, and running smoothly with our professional web maintenance services. From regular backups and performance optimization to bug fixes and security monitoring, we ensure your website stays reliable and delivers the best experience to your visitors."
      />

      <PageHeadContents title="Web Maintenance" />
      <WebMaintenanceItem />
    </>
  );
};

export default WebMaintenance;
