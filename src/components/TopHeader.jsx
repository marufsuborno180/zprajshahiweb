import React from 'react'

function TopHeader() {
    const officeSelect = (e) => {
        let value = e.target.value
        console.log(value);
        const secSection = document.getElementById('secSection')
        const MontraloySelect = document.getElementById('MontraloySelect')
        const Directorate = document.getElementById('Directorate')
        const Divisional = document.getElementById('Divisional')
        const Districal = document.getElementById('Districal')
        const UpazilaBatayon = document.getElementById('UpazilaBatayon')
        const UnionBatayon = document.getElementById('UnionBatayon')
        switch (value) {
            case 'ministry':
                MontraloySelect.style.display = 'flex'
                Directorate.style.display = 'none'
                Divisional.style.display = 'none'
                Districal.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                UnionBatayon.style.display = 'none'
                break;
        
            case 'directorate':
                Directorate.style.display = 'flex'
                MontraloySelect.style.display = 'none'
                Divisional.style.display = 'none'
                Districal.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                UnionBatayon.style.display = 'none'
                break;
        
            case 'divisional':
                Divisional.style.display = 'flex'
                MontraloySelect.style.display = 'none'
                Directorate.style.display = 'none'
                Districal.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                UnionBatayon.style.display = 'none'
                break;
        
            case 'districal':
                Districal.style.display = 'flex'
                MontraloySelect.style.display = 'none'
                Directorate.style.display = 'none'
                Divisional.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                UnionBatayon.style.display = 'none'
                break;
        
            case 'upazilaBatayon':
                UpazilaBatayon.style.display = 'flex'
                MontraloySelect.style.display = 'none'
                Directorate.style.display = 'none'
                Divisional.style.display = 'none'
                Districal.style.display = 'none'
                UnionBatayon.style.display = 'none'
                break;
        
            case 'unionBatayon':
                UnionBatayon.style.display = 'flex'
                MontraloySelect.style.display = 'none'
                Directorate.style.display = 'none'
                Divisional.style.display = 'none'
                Districal.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                break;
        
            default:
                MontraloySelect.style.display = 'none'
                Directorate.style.display = 'none'
                Divisional.style.display = 'none'
                Districal.style.display = 'none'
                UpazilaBatayon.style.display = 'none'
                UnionBatayon.style.display = 'none'
                
        }
        if (value == "ministry") {
            MontraloySelect.style.display = 'flex'
            console.log('o');
            if (value == "directorate") {
                Directorate.style.display = 'flex'
                console.log('o');
            } else {
                secSection.style.display = 'none'
            }
        }
    }
    return (
        <>
            <div className="topHeader Bg-color-1">
                <div className="row justify-space-between align-items-center">
                    <div className="col-6">
                        <div className="row">
                            <div className="slide-panel-btns">
                                <div className="slide-panel-button">
                                    <a href="http://www.bangladesh.gov.bd/" target="_blank" title="বাংলাদেশ জাতীয় তথ্য বাতায়ন">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a>
                                </div>
                            </div>
                            <div id="div-lang">
                                <div className="sectionPart">
                                    <select onInput={officeSelect} name="" id="offieceFSTSelecct">
                                        <option value="">অফিসের ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="MontraloySelect">
                                        <option value="">মন্ত্রণালয় ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="Directorate">
                                        <option value="">অধিদপ্তর ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="Divisional">
                                        <option value="">বিভাগীয় ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="Districal">
                                        <option value="">জেলা ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="UpazilaBatayon">
                                        <option value="">উপজেলা ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <select name="" className='d-none' id="UnionBatayon">
                                        <option value="">ইউনিয়ন ধরণ</option>
                                        <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
                                        <option value="directorate">অধিদপ্তর বাতায়ন</option>
                                        <option value="divisional">বিভাগীয় বাতায়ন</option>
                                        <option value="districal">জেলা বাতায়ন</option>
                                        <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
                                        <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
                                        <option value="otherOfficeList">অন্যান্য</option>
                                    </select>
                                    <button id="officeTypeBTN" className='Bg-color-2 gn-btn p-2'>Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <input type="text" className='searchBar' />
                            <button type="submit" className='gn-btn mx-2 p-2'>Search</button>
                            <button type="button" className='p-2'>English</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader
