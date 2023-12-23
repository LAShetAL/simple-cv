import { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import moment from 'moment';
import { FaGraduationCap } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Page() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [isActive, setIsActive] = useState(false)
  const [educations, setEducations] = useState('')
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    faculty: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
  })
  const [isActiveEducation, setIsActiveEducation] = useState(false);
  const [companies, setCompanies] = useState('');
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    title: '',
    girisDate: Date,
    cikisDate: Date,
    aciklama: '',
  });
  const [person, setPerson] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    mailAddress: '',
  })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    loadExample()
  }, [])
  const trOptions = { year: 'numeric', month: 'long' };

  function onChangeIsim(e) {
    setPerson((prevInfo) => ({ ...prevInfo, name: e.target.value }))
  }
  function setSoyIsim(e) {
    setPerson((prevInfo) => ({ ...prevInfo, lastName: e.target.value }))
  }
  function setPhoneNumber(e) {
    setPerson((prevInfo) => ({ ...prevInfo, phoneNumber: e.target.value }))
  }
  function setMailAdres(e) {
    setPerson((prevInfo) => ({ ...prevInfo, mailAddress: e.target.value }))
  }

  function onChangeEducation(e) {
    setEducationInfo((prevInfo) => ({ ...prevInfo, schoolName: e.target.value }))
  }
  function setFaculty(e) {
    setEducationInfo((prevInfo) => ({ ...prevInfo, faculty: e.target.value }))
  }
  function handleEventEducation(e) {
    setEducationInfo((prevInfo) => ({ ...prevInfo, graduate: e.target.value }))
  }
  function setGirisTarih(e) {
    setEducationInfo((prevInfo) => ({ ...prevInfo, enterDate: e.target.value }))
  }
  function setMezunTarih(e) {
    setEducationInfo((prevInfo) => ({ ...prevInfo, graduateDate: e.target.value }))
  }

  const handleSubmitEducation = () => {
    setEducations((prevEducations) => {
      if (isEditing) {
        const updatedEducations = [...prevEducations];
        updatedEducations[editingIndex] = { ...educationInfo };
        return updatedEducations;
      } else {
        return [...prevEducations, { ...educationInfo }];
      }
    });
    setEducationInfo({
      schoolName: '',
      faculty: '',
      graduate: '',
      enterDate: '',
      graduateDate: '',
    })
    setIsActiveEducation(false)
    setIsEditing(false)
    setEditingIndex(null)
  }

  const handleSubmitResetEducation = () => {
    setEducationInfo({
      schoolName: '',
      faculty: '',
      graduate: '',
      enterDate: '',
      graduateDate: '',
    })
  }

  const handleSubmitReset = () => {
    setCompanyInfo({
      companyName: '',
      title: '',
      girisDate: Date,
      cikisDate: Date,
      aciklama: '',
    })
  }

  const handleDelete = (index) => {
    const updatedEducations = [...educations]
    updatedEducations.splice(index, 1)
    setEducations(updatedEducations)
  }
  const handleDeleteCompany = (index) => {
    const updatedCompanies = [...companies]
    updatedCompanies.splice(index, 1)
    setCompanies(updatedCompanies)
  }

  const editRow = (education) => {
    setIsEditing(true)
    setIsActiveEducation(true)
    setEducationInfo({
      schoolName: education.schoolName,
      faculty: education.faculty,
      graduate: education.graduate,
      enterDate: education.enterDate,
      graduateDate: education.graduateDate,
    })
    setEditingIndex(educations.findIndex(edu => edu === education));
  }
  const editRowCompany = (company) => {
    setIsEditing(true)
    setIsActive(true)
    setCompanyInfo({
      companyName: company.companyName,
      title: company.title,
      girisDate: company.girisDate,
      cikisDate: company.cikisDate,
      aciklama: company.aciklama,
    })
    setEditingIndex(companies.findIndex(comp => comp === company))
  }

  const onChange = (e) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, companyName: e.target.value }));
  };

  const handleEvent = (e) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, title: e.target.value }));
  };
  const setGirisDate = (e) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, girisDate: e.target.value }));
  };
  const setCikisDate = (e) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, cikisDate: e.target.value }))
  }
  const setAciklama = (e) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, aciklama: e.target.value }))
  }

  const handleSubmit = () => {

    setCompanies((prevCompanies) => {
      if (isEditing) {
        const updatedCompanies = [...prevCompanies]
        updatedCompanies[editingIndex] = { ...companyInfo }
        return updatedCompanies
      } else {
        return [...prevCompanies, { ...companyInfo }];
      }
    })
    setCompanyInfo({
      companyName: '',
      title: '',
      girisDate: '',
      cikisDate: '',
      aciklama: '',
    });
    setIsActive(false);
    setIsEditing(false)
    setEditingIndex(null)
  };


  const resetAll = () => {
    setPerson({
      name: '',
      lastName: '',
      phoneNumber: '',
      mailAddress: '',
    })
    setEducations([])
    setCompanies([])
  }

  const loadExample = () => {
    setPerson({
      name: 'Kayra',
      lastName: 'Han',
      phoneNumber: '+90 566 631 93 36',
      mailAddress: 'etcatera@himail.com',
    })

    setEducations([{
      schoolName: 'Pamukkale Üniversitesi',
      faculty: 'Bilgisayar Mühendisliği',
      graduate: 'Evet',
      enterDate: '01-01-2019',
      graduateDate: '01-01-2024',
    }])

    setCompanies([{
      companyName: 'PREV Mühendislik Çözümleri',
      title: 'Associate',
      girisDate: '01-01-2014',
      cikisDate: '01-01-2016',
      aciklama: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in risus eu tortor hendrerit tincidunt. Nam imperdiet ultricies ipsum, sed dapibus velit porttitor a. Pellentesque sit amet interdum nulla, vel tincidunt nisl. Ut sodales laoreet turpis consectetur commodo. Fusce imperdiet tincidunt orci id lacinia. ',
    }],
    )
    setCompanies([{
      companyName: 'PREV Mühendislik Çözümleri',
      title: 'Associate',
      girisDate: '01-01-2014',
      cikisDate: '01-01-2016',
      aciklama: 'Sed rhoncus massa eget rutrum placerat. Maecenas ut placerat mauris. Vivamus egestas sapien sit amet posuere egestas. Mauris cursus ac augue nec luctus. Aliquam vitae imperdiet felis. Fusce fermentum, diam non hendrerit luctus, nulla est lobortis nisi, sed tristique neque urna sit amet neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eros tellus, facilisis non eros quis, mollis pulvinar mauris.'
    }, {

      companyName: 'Tex Entrepreneur',
      title: 'CEO Executive',
      girisDate: '01-01-2016',
      cikisDate: '01-01-2018',
      aciklama: 'Sed rhoncus massa eget rutrum placerat. Maecenas ut placerat mauris. Vivamus egestas sapien sit amet posuere egestas. Mauris cursus ac augue nec luctus. Aliquam vitae imperdiet felis. Fusce fermentum, diam non hendrerit luctus, nulla est lobortis nisi, sed tristique neque urna sit amet neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eros tellus, facilisis non eros quis, mollis pulvinar mauris.'

    }])
  }
  return (
    <>
      <div className="home">
        <div className="sideContainer">
          <div className="topAreaSideContainer">
            <div className="topResetTemplate">
              <button className="deleteAll" onClick={resetAll} >
                <MdDeleteForever />
                Tümünü Temizle</button>
              <button className="loadExample" onClick={loadExample}>Örnek Yükle</button>
            </div>
          </div>

          <div className="formContainer">

            <h2>Kişisel Bilgileriniz</h2>
            <div className="contentPersonalForm">
              <div className="inputContainer">
                <label className="labelPersonal" htmlFor="isim">İsminiz</label>
                <input className="inputPersonal" type="text" onChange={onChangeIsim} value={person.name} />
                <label className="labelPersonal" htmlFor="isim">Soyisminiz</label>
                <input className="inputPersonal" type="text" onChange={setSoyIsim} value={person.lastName} />
                <label className="labelPersonal" htmlFor="isim">Telefon No</label>
                <input className="inputPersonal" type="text" onChange={setPhoneNumber} value={person.phoneNumber} />
                <label className="labelPersonal" htmlFor="isim">Mail Adresiniz</label>
                <input className="inputPersonal" type="text" onChange={setMailAdres} value={person.mailAddress} />

              </div>
              {/* <div className="inputContainer">
              </div> */}
            </div>

            <div className="contentEducationForm">
              <div className="addEducationSection" on>
                <button className="expandSection" onClick={() => isActiveEducation ? setIsActiveEducation(false) : setIsActiveEducation(true)}>
                  <h3 className="expandSectionHeader">
                    <FaGraduationCap />
                    Eğitim Bilgileri
                  </h3>
                  {isActiveEducation ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              <div className="schoolContainer">
                {educations && educations.length > 0 && (
                  <div className="addedSchool">
                    <div className="ul">
                      {educations.map((education, index) => (
                        <button className="education-li" key={index}>
                          <i>{education.schoolName}</i>
                          <i>
                            {new Date(education.enterDate).toLocaleDateString('tr-TR', trOptions)} -{' '}
                            {education.graduateDate ? (
                              moment(education.graduateDate).isSame(moment(), 'day') ? (
                                'Günümüz'
                              ) : (
                                new Date(education.graduateDate).toLocaleDateString('tr-TR', trOptions)
                              )
                            ) : (
                              ''
                            )}
                          </i>
                          <span className="actions">
                            <BsFillTrashFill
                              className="delete-btn"
                              onClick={() => handleDelete(index)}
                            />

                            <BsFillPencilFill
                              className="edit-btn"
                              onClick={() => editRow(education)}
                            />
                          </span>

                          {/* <a href="#" className="delete-item" onClick={() => handleDelete(index)}>Sil</a> */}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {
                  isActiveEducation ? (
                    <div className="educationForm">
                      <label className="labelEducation" htmlFor="">Üniversite</label>
                      <input className="inputEducation" type="text" value={educationInfo.schoolName} onChange={onChangeEducation} />
                      <label className="labelEducation" htmlFor="">Bölüm</label>
                      <input className="inputEducation" type="text" value={educationInfo.faculty} onChange={setFaculty} />

                      <form action="" className="inputForm">
                        <label className="labelEducatio" htmlFor="">Mezun bilgisi:</label>
                        <input className="inputEducatio" type="radio" name="graduate" value="Evet" checked={educationInfo.graduate === 'Evet'} onChange={handleEventEducation} />
                        <label className="labelEducatio" htmlFor="">Evet</label>
                        <input className="inputEducatio" type="radio" name="graduate" value="Hayır" checked={educationInfo.graduate === 'Hayır'} onChange={handleEventEducation} />
                        <label className="labelEducatio" htmlFor="">Hayır</label>
                      </form>
                      <label className="labelEducation" htmlFor="">Giriş Tarihi</label>
                      <input className="inputEducation" type="date" value={educationInfo.enterDate} onChange={setGirisTarih} />
                      <label className="labelEducation" htmlFor="">Mezun Tarihi</label>
                      <input className="inputEducation" type="date" value={educationInfo.graduateDate} onChange={setMezunTarih} />
                      <div className="buttonLocation">
                        <button className="cancel" onClick={() => setIsActiveEducation(false)}>İptal et</button>

                        <div className="inputControl">
                          <button className="cancelMedia" onClick={() => setIsActiveEducation(false)}>İptal</button>

                          <button className="inputSil" onClick={handleSubmitResetEducation}>Temizle</button>
                          <button className="inputEkle" onClick={handleSubmitEducation}>Ekle</button>
                        </div>

                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="buttonAreaEducation">

                        {/* <button className="addEducation" onClick={() => setIsActiveEducation(true)}>Eğitim bilgis ekle</button> */}
                      </div>
                    </>
                  )
                }
              </div>
            </div>

            <div className='contentCompany'>
              <div className="addCompanySection" on>
                <button className="expandSection" onClick={() => {
                  handleSubmitReset
                  isActive ? setIsActive(false) : setIsActive(true)
                }}>
                  <h3 className="expandSectionHeader">
                    <FaSuitcase />
                    Deneyimleriniz
                  </h3>
                  {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              <div className="companyContainer" >
                {companies.length > 0 && (
                  <div className="addedCompanies">
                    <div className='ul'>
                      {companies.map((company, index) => (
                        <button className='li' key={index}>
                          <i>{company.companyName}</i>
                          <i>{new Date(company.girisDate).toLocaleDateString('tr-TR', trOptions)} -{' '}
                            {company.cikisDate ? (
                              moment(company.cikisDate).isSame(moment(), 'day') ? (
                                'Günümüz'
                              ) : (
                                new Date(company.cikisDate).toLocaleDateString('tr-TR', trOptions)
                              )
                            ) : (
                              ''
                            )}</i>
                          <span className="actions">
                            <BsFillTrashFill
                              className="delete-btn"
                              onClick={() => handleDeleteCompany(index)}
                            />

                            <BsFillPencilFill
                              className="edit-btn"
                              onClick={() => editRowCompany(company)}
                            />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                {
                  isActive ? (
                    <div className="contentExperienceForm">
                      <div className="experienceForm">

                        <label htmlFor="">Şirket İsmi</label>
                        <input type="text" value={companyInfo.companyName} onChange={onChange} />
                        <label htmlFor="">Ünvan</label>
                        <input type="text" value={companyInfo.title} onChange={handleEvent} />
                        <label htmlFor="">Giriş Tarih</label>
                        <input type="date" value={companyInfo.girisDate} onChange={setGirisDate} />
                        <label htmlFor="">Çıkış Tarihi</label>
                        <input type="date" value={companyInfo.cikisDate} onChange={setCikisDate} />
                        <label htmlFor="">Açıklama</label>
                        <textarea oninput="this.parentNode.dataset.value = this.value" rows="1" type="text" value={companyInfo.aciklama} onChange={setAciklama} />
                      </div>
                      <div className="buttonLocation">
                        <button className="cancel" onClick={() => setIsActive(false)}>İptal et</button>
                        <div className="inputControl">
                          <button className="cancelMedia" onClick={() => setIsActive(false)}>İptal</button>
                          <button className="inputSil" onClick={handleSubmitReset}>Temizle</button>
                          <button className="inputEkle" onClick={handleSubmit}>Ekle</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className='buttonArea'>
                        {/* <button className="buttonCompany" onClick={() => setIsActive(true)}>Şirket Ekle</button> */}
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="CVArea">
          <div className="topArea">
            <div className="personalInfo">
              <h1 className="resumeName">{person.name} {person.lastName}</h1>
            </div>
            <div className="contactInfo">
              <div className="email">
                {person && person.mailAddress.length != 0 && (
                  <div className="emailBlok">
                    <MdEmail />
                    {person.mailAddress}
                  </div>

                )}
              </div>
              <div className="number">
                {person.phoneNumber.length > 0 && (
                  <div className="numberBlok">
                    <FaPhone />
                    {person.phoneNumber}
                  </div>
                )}

              </div>
            </div>
          </div>

          <div className="cvDetails">
            <div className="cvEducationInfo">
              {educations && educations.length > 0 && (
                <div className="educationInfoGroup">
                  <div className="educationGroup">
                    <h3 className="headerText">Eğitim bilgileri</h3>
                    {educations.map((education, index) => (
                      <div className="edForm" key={index}>
                        <div className="tarih">
                          <p>
                            {new Date(education.enterDate).toLocaleDateString('tr-TR', trOptions)} -{' '}
                            {education.graduateDate ? (
                              moment(education.graduateDate).isSame(moment(), 'day') ? (
                                'Günümüz'
                              ) : (
                                new Date(education.graduateDate).toLocaleDateString('tr-TR', trOptions)
                              )
                            ) : (
                              ''
                            )}
                          </p>
                        </div>
                        <div className="bilgi">
                          <p className="okul">{education.schoolName}</p>
                          <p className="bolum">{education.faculty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="cvExperience">
              {companies.length > 0 && (
                <div className="companyGroup">
                  <h3 className="headerText">Deneyim bilgileri</h3>
                  {companies.map((company, index) => (
                    <div className="companyInfo" key={index}>
                      <div className="isTarih">
                        <div className="tarih" >
                          <p>
                            {new Date(company.girisDate).toLocaleDateString('tr-TR', trOptions)} -{' '}
                            {company.cikisDate ? (
                              moment(company.cikisDate).isSame(moment(), 'day') ? (
                                'Günümüz'
                              ) : (
                                new Date(company.cikisDate).toLocaleDateString('tr-TR', trOptions)
                              )
                            ) : (
                              ''
                            )}
                          </p>
                        </div>
                        <div className="is">
                          <p className="sirket">{company.companyName}</p>
                          <p className="unvan">{company.title}</p>
                        </div>
                      </div>
                      <div className="aciklama">
                        <p>{company.aciklama}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}