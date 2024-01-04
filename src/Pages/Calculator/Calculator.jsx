// import React from 'react';

import { Input, Select } from "antd";

const Calculator = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-5">
                        <p className="text-secondary">Utilize this calculator to ascertain the necessary Cubic Yards or tons of composite materials for your project. RGV Turf, LLC. suggests a base of 1-2 inches of crushed limestone or granite atop 2-3 inches of compacted caliche mix, creating a level and sloped surface suitable for artificial grass.</p>
                        <div style={{backgroundColor: '#eaefe4', position: 'sticky', top:'30px'}} className="row p-3 rounded">
                            {/* Select Shap ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Shape Selection:</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                            <Select
                                defaultValue="Rectangle"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                options={[
                                    { value: 'Rectangle', label: 'Rectangle',},
                                    { value: 'Triangle', label: 'Triangle',},
                                    {value: 'Circle', label: 'Circle',},
                                ]}
                                />
                            </div>
                            {/* Length Feet ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Length (feet):</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                                <Input size="large"/>
                            </div>
                            {/* Width (feet) ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Width (feet):</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                                <Input size="large"/>
                            </div>
                            {/* Depth (inches): ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Depth (inches):</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                                <Input size="large"/>
                            </div>
                            <div className="col-12 p-2">
                                {/* Calculate Button ________________________ */}
                                <button className="btn bg-dark d-block text-white w-100 fw-bold">Calculate</button>
                            </div>
                            <div className="col-12 p-2">
                                {/* Clear Button ________________________ */}
                                <button className="btn bg-light d-block w-100 fw-bold">Clear</button>
                            </div>
                            {/* Cubic Yards: ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Cubic Yards:</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                                <Input size="large"/>
                            </div>
                            {/* Total Tons*: ____________________________ */}
                            <div className="col-6 border p-2">
                                <div className="h-100 d-flex align-items-center"><h6 className="m-0">Total Tons*:</h6></div>
                            </div>
                            <div className="col-6 border px-2 py-1">
                                <Input size="large"/>
                            </div>
                        </div>
                        
                    </div>
                    {/* Right Side Div ____________________________________________________ */}
                    <div className="col-md-7 p-4">
                        <div>
                            <p className="fw-bold text-dark">How to figure rectangle manually:</p>
                            <ol>
                                <li className="text-secondary small">Length x Width = Square Feet</li>
                                <li className="text-secondary small">Square Feet ÷ “X” = Cubic Yards (to find “X,” match depth with number in table below)</li>
                                <li className="text-secondary small">To convert Cubic Yards to Tons*: Cubic Yards x 1.4 = Tons</li>
                                <li className="text-secondary small">To convert Tons to Cubic Yards*: Tons ÷ 1.4 = Cubic Yards</li>
                            </ol>
                            <div className="border">
                                <p style={{fontSize: '14px'}} className="fw-bold p-2 m-0">1.4 is a rule of thumb that will work for most sand and gravel products (1 yard = 2,800#). Some products such as soils and mixes may vary due to their different bulk densities (weight per cu. yd).</p>
                            </div>
                            <div className="container py-2">
                                <div className="row">
                                    <div className="col-4 border p-2">
                                        <p className="text-secondary small mb-0">Example 1:</p>
                                    </div>
                                    <div className="col-8 border p-2">
                                        <p className="mb-0 text-secondary small">2,000 Square Ft. bunker at 6″ deep <br />2,000 ÷ 54 = 37 Cubic Yards Bunker Sand <br />37 x 1.4 = 52 Tons</p>
                                    </div>
                                    <div className="col-4 border p-2">
                                        <p className="text-secondary small mb-0">Example 2:</p>
                                    </div>
                                    <div className="col-8 border p-2">
                                        <p className="mb-0 text-secondary small">To cover cart path 1,200′ x 4′ x 3″ deep <br />1,200 x 4 = 4,800 square feet <br />4,800 ÷ 108 = 44.5 cubic yards gravel <br />44.5 x 1.4 = 63 tons</p>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary'>Inches deep</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary'>&ldquo;X&rdquo;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>1&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>320</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>2&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>162</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>3&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>108</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>4&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>81</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>5&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>65</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>6&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>54</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>7&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>47</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>8&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>40</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>9&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>36</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>10&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>33</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>11&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>30</th>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor: '#eaefe4'}} className='text-end text-secondary fw-normal'>12&quot;</th>
                                        <th style={{backgroundColor: '#ebebeb'}}></th>
                                        <th style={{backgroundColor: '#fff4d6'}} className='text-secondary fw-normal'>27</th>
                                    </tr>
                                
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;