import React, { useState } from "react";
import { NIYAMO_RULES } from "./rulesList";

const defaultRules = NIYAMO_RULES.map(() => false);

function DealForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    rules: defaultRules,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRuleToggle = (index) => {
    setFormData((prev) => {
      const currentRules = Array.isArray(prev.rules) && prev.rules.length === NIYAMO_RULES.length
        ? prev.rules
        : defaultRules.slice();
      const next = currentRules.slice();
      next[index] = !next[index];
      return { ...prev, rules: next };
    });
  };

  const rulesSelection = (() => {
    const r = formData.rules;
    if (Array.isArray(r) && r.length === NIYAMO_RULES.length) return r;
    return defaultRules.slice();
  })();

  const handleSignatureChange = (e) => {
    const { name } = e.target;
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, [name]: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rulesToSubmit = Array.isArray(formData.rules) && formData.rules.length === NIYAMO_RULES.length
      ? formData.rules
      : defaultRules.slice();
    onSubmit({ ...formData, rules: rulesToSubmit });
  };

  const bannerSrc = `${process.env.PUBLIC_URL || ""}/banner.png`;

  return (
    <form className="deal-form" onSubmit={handleSubmit}>
      <div className="deal-form__header">
        <div className="deal-form__banner-wrap">
          <img src={bannerSrc} alt="Banner" className="deal-form__banner" />
        </div>
        <div className="deal-form__date-field">
          <label>તારીખ:</label>
          <input
            type="date"
            name="one"
            value={formData.one}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="deal-form__grid">
        <div className="deal-form__field deal-form__field--full">
          <label>ખરીદનારનું નામ :</label>
          <input
            type="text"
            name="twelve"
            value={formData.twelve}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> વેચનાર નું નામ :</label>
          <input
            type="text"
            name="fourteen"
            value={formData.fourteen}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__two-column">
          <div className="deal-form__left-column">
            <div className="deal-form__field">
              <label>ગામ:</label>
              <input
                type="text"
                name="four"
                value={formData.four}
                onChange={handleChange}
              />
            </div>
            <div className="deal-form__field">
              <label>પ્લોટ નં:</label>
              <input
                type="text"
                name="five"
                value={formData.five}
                onChange={handleChange}
              />
            </div>
            <div className="deal-form__field">
              <label>ભાવ :</label>
              <input
                type="text"
                name="eight"
                value={formData.eight}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="deal-form__right-column">
            <div className="deal-form__field">
              <label>સર્વે નંબર:</label>
              <input
                type="text"
                name="three"
                value={formData.three}
                onChange={handleChange}
              />
            </div>
            <div className="deal-form__field">
              <label>ચો. વાર / ચો. ફૂટ:</label>
              <input
                type="text"
                name="six"
                value={formData.six}
                onChange={handleChange}
              />
            </div>
            <div className="deal-form__field">
              <label>સોસાયટીનું નામ:</label>
              <input
                name="seven"
                type="text"
                value={formData.seven}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label>મિલકતનો પ્રકાર:</label>
          <select name="two" value={formData.two} onChange={handleChange}>
            <option value="">select any one</option>
            <option value="rehnank plot">રહેણાંક પ્લોટ</option>
            <option value="flat/appartment">ફ્લેટ / એપાર્ટમેન્ટ</option>
            <option value="bunglow/makan">બંગલો / મકાન</option>
            <option value="commercial dukan">કોમર્શિયલ દુકાન</option>
            <option value="office">ઓફિસ</option>
            <option value="kheti ni zameen">ખેતીની જમીન</option>
          </select>
        </div>
        <div className="deal-form__two-column">
          <div className="deal-form__left-column">
            <div className="deal-form__field">
              <label>ટોકન :</label>
              <input
                type="text"
                name="nine"
                value={formData.nine}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="deal-form__right-column">
            <div className="deal-form__field">
              <label>મુદત :</label>
              <input
                type="text"
                name="ten"
                value={formData.ten}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label>પેમેન્ટ કંડીશન :</label>
          <input
            type="textarea"
            name="eleven"
            value={formData.eleven}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> 1 - પેમેન્ટ અને તારીખ :</label>
          <input
            type="text"
            name="sixteen"
            value={formData.sixteen}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> 2 - પેમેન્ટ અને તારીખ :</label>
          <input
            type="text"
            name="seventeen"
            value={formData.seventeen}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> 3 - પેમેન્ટ અને તારીખ :</label>
          <input
            type="text"
            name="eighteen"
            value={formData.eighteen}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> 4 - પેમેન્ટ અને તારીખ :</label>
          <input
            type="text"
            name="nineteen"
            value={formData.nineteen}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full">
          <label> 5 - પેમેન્ટ અને તારીખ :</label>
          <input
            type="text"
            name="twenty"
            value={formData.twenty}
            onChange={handleChange}
          />
        </div>
        <div className="deal-form__field deal-form__field--full deal-form__field--rules">
          <label className="deal-form__rules-label">નિયમો :</label>
          <div className="deal-form__rules deal-form__rules--checkboxes">
            {NIYAMO_RULES.map((ruleText, index) => (
              <label key={index} className="deal-form__rule-item">
                <input
                  type="checkbox"
                  name={`rule-${index}`}
                  checked={!!rulesSelection[index]}
                  onChange={() => handleRuleToggle(index)}
                  className="deal-form__rule-cb"
                  aria-label={ruleText}
                />
                <span className="deal-form__rule-text">{ruleText}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="deal-form__signatures">
          <div className="deal-form__sig-section deal-form__sig-left">
            <label>ખરીદનારની સહી :</label>
            <input
              type="file"
              name="thirteen"
              accept="image/*"
              capture="environment"
              onChange={handleSignatureChange}
              className="deal-form__file"
            />
            {formData.thirteen && (
              <div className="deal-form__signature-preview">
                <img src={formData.thirteen} alt="ખરીદનારની સહી" />
                <button
                  type="button"
                  className="deal-form__clear-sig"
                  onClick={() => setFormData((p) => ({ ...p, thirteen: "" }))}
                >
                  Remove photo
                </button>
              </div>
            )}
          </div>
          <div className="deal-form__sig-section deal-form__sig-right">
            <label> વેચનાર ની સહી :</label>
            <input
              type="file"
              name="fifteen"
              accept="image/*"
              capture="environment"
              onChange={handleSignatureChange}
              className="deal-form__file"
            />
            {formData.fifteen && (
              <div className="deal-form__signature-preview">
                <img src={formData.fifteen} alt="વેચનાર ની સહી" />
                <button
                  type="button"
                  className="deal-form__clear-sig"
                  onClick={() => setFormData((p) => ({ ...p, fifteen: "" }))}
                >
                  Remove photo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="deal-form__actions">
        <button type="submit" className="deal-form__submit">
          Generate Deal Letter
        </button>
      </div>
    </form>
  );
}

export default DealForm;
