import React from "react";
import { NIYAMO_RULES } from "./rulesList";

const isSignatureImage = (value) =>
  value && typeof value === "string" && value.startsWith("data:image");

const formatDate = (value) => {
  if (!value) return "—";
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return `${match[3]}/${match[2]}/${match[1]}`;
  return value;
};

const DealLetter = React.forwardRef(({ data }, ref) => {
  if (!data || typeof data !== "object") return null;

  const bannerSrc = `${typeof window !== "undefined" ? window.location.origin : ""}${process.env.PUBLIC_URL || ""}/logo.png`;

  return (
    <div ref={ref} id="deal-letter" className="deal-letter">
      <div className="deal-letter__header">
        <div className="deal-letter__banner-wrap">
          <img src={bannerSrc} alt="Banner" className="deal-letter__banner" />
        </div>
        <div className="deal-letter__date-field">
          <strong>તારીખ:</strong> {formatDate(data.one)}
        </div>
      </div>
      <h2 className="deal-letter__title">રિયલ એસ્ટેટ સોદા માટે સમજોતાપત્ર (MOU)</h2>

      <div className="deal-letter__grid">
        <div className="deal-letter__field deal-letter__field--full">
          <strong>ખરીદનારનું નામ:</strong> {data.twelve || "—"}
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>વેચનાર નું નામ:</strong> {data.fourteen || "—"}
        </div>
        
        <div className="deal-letter__two-column">
          <div className="deal-letter__left-column">
            <div className="deal-letter__field">
              <strong>ગામ:</strong> {data.four || "—"}
            </div>
            <div className="deal-letter__field">
              <strong>પ્લોટ નં:</strong> {data.five || "—"}
            </div>
            <div className="deal-letter__field">
              <strong>ભાવ:</strong> {data.eight || "—"}
            </div>
          </div>
          <div className="deal-letter__right-column">
            <div className="deal-letter__field">
              <strong>સર્વે નંબર:</strong> {data.three || "—"}
            </div>
            <div className="deal-letter__field">
              <strong>ચો. વાર / ચો. ફૂટ:</strong> {data.six || "—"}
            </div>
            <div className="deal-letter__field">
              <strong>સોસાયટીનું નામ:</strong> {data.seven || "—"}
            </div>
          </div>
        </div>

        <div className="deal-letter__field deal-letter__field--full">
          <strong>મિલકતનો પ્રકાર:</strong> {data.two || "—"}
        </div>
        <div className="deal-letter__two-column">
          <div className="deal-letter__left-column">
            <div className="deal-letter__field">
              <strong>ટોકન:</strong> {data.nine || "—"}
            </div>
          </div>
          <div className="deal-letter__right-column">
            <div className="deal-letter__field">
              <strong>મુદત:</strong> {data.ten || "—"}
            </div>
          </div>
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>પેમેન્ટ કંડીશન:</strong> {data.eleven || "—"}
        </div>

        <div className="deal-letter__field deal-letter__field--full">
          <strong>1 - પેમેન્ટ અને તારીખ:</strong> {data.sixteen || "—"}
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>2 - પેમેન્ટ અને તારીખ:</strong> {data.seventeen || "—"}
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>3 - પેમેન્ટ અને તારીખ:</strong> {data.eighteen || "—"}
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>4 - પેમેન્ટ અને તારીખ:</strong> {data.nineteen || "—"}
        </div>
        <div className="deal-letter__field deal-letter__field--full">
          <strong>5 - પેમેન્ટ અને તારીખ:</strong> {data.twenty || "—"}
        </div>

        <div className="deal-letter__field deal-letter__field--full deal-letter__field--rules">
          <h3 className="deal-letter__rules-heading">નિયમો</h3>
          <ol className="deal-letter__rules-list">
            {(data.rules && Array.isArray(data.rules)
              ? NIYAMO_RULES.filter((_, i) => data.rules[i])
              : NIYAMO_RULES
            ).map((text, i) => (
              <li key={i} className="deal-letter__rule-item">{text}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="deal-letter__signature-section">
        <div className="deal-letter__signature-left">
          <strong>ખરીદનારની સહી:</strong>
          {isSignatureImage(data.thirteen) ? (
            <img src={data.thirteen} alt="ખરીદનારની સહી" className="deal-letter__signature" />
          ) : null}
        </div>
        <div className="deal-letter__signature-right">
          <strong>વેચનાર ની સહી:</strong>
          {isSignatureImage(data.fifteen) ? (
            <img src={data.fifteen} alt="વેચનાર ની સહી" className="deal-letter__signature" />
          ) : null}
        </div>
      </div>
    </div>
  );
});

export default DealLetter;
