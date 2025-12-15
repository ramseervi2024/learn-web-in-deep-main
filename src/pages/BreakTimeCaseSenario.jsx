import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const WorkDaysSchedule = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const timeOptions = [];

  // Generate time options from 00:00 to 23:30 in 30-minute intervals
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(time);
    }
  }

  // Convert time to minutes for easy comparison
  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + (minutes || 0);
  };

  // Convert minutes to time string
  const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  // Helper function to check if breaks overlap
  const checkBreaksOverlap = (breaks) => {
    if (!breaks || breaks.length === 0) return false;

    const intervals = breaks
      .map((b, index) => ({
        id: index,
        start: timeToMinutes(b.start),
        end: timeToMinutes(b.end),
      }))
      .sort((a, b) => a.start - b.start);

    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i].end > intervals[i + 1].start) {
        return true;
      }
    }
    return false;
  };

  // Helper function to check if breaks are within working hours
  const checkBreaksWithinHours = (breaks, workingHours) => {
    if (!breaks || breaks.length === 0 || !workingHours) return false;

    const workStart = timeToMinutes(workingHours.start);
    const workEnd = timeToMinutes(workingHours.end);

    for (let i = 0; i < breaks.length; i++) {
      const breakStart = timeToMinutes(breaks[i].start);
      const breakEnd = timeToMinutes(breaks[i].end);

      if (breakStart < workStart || breakEnd > workEnd) {
        return true;
      }
    }
    return false;
  };

  // Initial form values
  const initialValues = {
    workDays:  [
      { day: 'Monday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
      { day: 'Tuesday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
      { day: 'Wednesday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
      { day: 'Thursday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
      { day: 'Friday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
      { day: 'Saturday', isWorking: false, workingHours: null, breaks: [] },
      { day: 'Sunday', isWorking: false, workingHours: null, breaks: [] },
    ],
  };

  // Validation function
  const validate = (values) => {
    const errors = { workDays: [] };

    values.workDays.forEach((day, dayIndex) => {
      errors.workDays[dayIndex] = {};
      
      if (day.isWorking) {
        // Check working hours
        if (!day.workingHours?.start) {
          errors.workDays[dayIndex].workingHours = { start: 'Start time is required' };
        } else if (!day.workingHours?.end) {
          errors.workDays[dayIndex].workingHours = { end: 'End time is required' };
        } else if (timeToMinutes(day.workingHours.end) <= timeToMinutes(day.workingHours.start)) {
          errors.workDays[dayIndex].workingHours = { end: 'End time must be after start time' };
        }

        // Check breaks
        if (day.breaks && day.breaks.length > 0) {
          const breakErrors = [];
          
          day.breaks.forEach((breakItem, breakIndex) => {
            const currentBreakErrors = {};
            
            if (!breakItem.start) {
              currentBreakErrors.start = 'Start time is required';
            }
            
            if (!breakItem.end) {
              currentBreakErrors.end = 'End time is required';
            } else if (breakItem.start && timeToMinutes(breakItem.end) <= timeToMinutes(breakItem.start)) {
              currentBreakErrors.end = 'End time must be after start time';
            }
            
            if (Object.keys(currentBreakErrors).length > 0) {
              breakErrors[breakIndex] = currentBreakErrors;
            }
          });
          
          if (breakErrors.length > 0) {
            errors.workDays[dayIndex].breaks = breakErrors;
          }
          
          // Check for overlaps
          if (checkBreaksOverlap(day.breaks)) {
            if (!errors.workDays[dayIndex].breaks) {
              errors.workDays[dayIndex].breaks = [];
            }
            // Mark all breaks as having overlap error
            day.breaks.forEach((_, index) => {
              if (!errors.workDays[dayIndex].breaks[index]) {
                errors.workDays[dayIndex].breaks[index] = {};
              }
              errors.workDays[dayIndex].breaks[index].overlap = 'Breaks cannot overlap';
            });
          }
          
          // Check if breaks are within working hours
          if (day.workingHours && checkBreaksWithinHours(day.breaks, day.workingHours)) {
            if (!errors.workDays[dayIndex].breaks) {
              errors.workDays[dayIndex].breaks = [];
            }
            // Mark all breaks as being outside working hours
            day.breaks.forEach((_, index) => {
              if (!errors.workDays[dayIndex].breaks[index]) {
                errors.workDays[dayIndex].breaks[index] = {};
              }
              errors.workDays[dayIndex].breaks[index].withinHours = 'Break must be within working hours';
            });
          }
        }
      }
    });

    // Remove empty error objects
    errors.workDays = errors.workDays.map(dayErrors => 
      Object.keys(dayErrors).length === 0 ? undefined : dayErrors
    );

    return errors.workDays.some(dayErrors => dayErrors) ? errors : {};
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log('Submitted values:', values);
      setSubmittedData(values);
      alert('Schedule saved successfully!');
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue, isValid } = formik;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px', color: '#333' }}>Select Your Work Days</h1>

      <form onSubmit={handleSubmit}>
        {values.workDays.map((day, dayIndex) => {
          const dayErrors = errors.workDays?.[dayIndex];
          const dayTouched = touched.workDays?.[dayIndex];

          return (
            <div
              key={day.day}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <input
                  type="checkbox"
                  id={`day-${dayIndex}`}
                  checked={day.isWorking}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFieldValue(`workDays[${dayIndex}].isWorking`, isChecked);
                    if (!isChecked) {
                      setFieldValue(`workDays[${dayIndex}].workingHours`, null);
                      setFieldValue(`workDays[${dayIndex}].breaks`, []);
                    } else {
                      setFieldValue(`workDays[${dayIndex}].workingHours`, {
                        start: '09:00',
                        end: '17:00',
                      });
                    }
                  }}
                  style={{ width: '20px', height: '20px', marginRight: '12px' }}
                />
                <label
                  htmlFor={`day-${dayIndex}`}
                  style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}
                >
                  {day.day} {day.isWorking ? '(Working)' : '(Off)'}
                </label>
              </div>

              {day.isWorking && (
                <>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ marginBottom: '12px', color: '#555' }}>Working hours</h3>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                          Start
                        </label>
                        <select
                          name={`workDays[${dayIndex}].workingHours.start`}
                          value={day.workingHours?.start || ''}
                          onChange={handleChange}
                          onBlur={formik.handleBlur}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: dayErrors?.workingHours?.start
                              ? '2px solid #d32f2f'
                              : '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                        >
                          <option value="">Select start time</option>
                          {timeOptions.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        {dayErrors?.workingHours?.start && (
                          <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>
                            {dayErrors.workingHours.start}
                          </div>
                        )}
                      </div>

                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                          End
                        </label>
                        <select
                          name={`workDays[${dayIndex}].workingHours.end`}
                          value={day.workingHours?.end || ''}
                          onChange={handleChange}
                          onBlur={formik.handleBlur}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: dayErrors?.workingHours?.end
                              ? '2px solid #d32f2f'
                              : '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                        >
                          <option value="">Select end time</option>
                          {timeOptions.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        {dayErrors?.workingHours?.end && (
                          <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>
                            {dayErrors.workingHours.end}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ color: '#555' }}>Breaks</h3>
                      <button
                        type="button"
                        onClick={() => {
                          if (!day.workingHours) return;

                          const workStart = timeToMinutes(day.workingHours.start);
                          const workEnd = timeToMinutes(day.workingHours.end);

                          let defaultStart = workStart + 60;
                          let defaultEnd = defaultStart + 60;

                          if (day.breaks.length > 0) {
                            const lastBreak = day.breaks[day.breaks.length - 1];
                            const lastBreakEnd = timeToMinutes(lastBreak.end);
                            defaultStart = lastBreakEnd + 30;
                            defaultEnd = defaultStart + 60;
                          }

                          if (defaultEnd > workEnd) {
                            defaultStart = workStart + 60;
                            defaultEnd = defaultStart + 60;
                          }

                          const newBreaks = [...day.breaks];
                          newBreaks.push({
                            start: minutesToTime(defaultStart),
                            end: minutesToTime(defaultEnd),
                          });

                          setFieldValue(`workDays[${dayIndex}].breaks`, newBreaks);
                        }}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#2196f3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '14px',
                        }}
                      >
                        + Add Break
                      </button>
                    </div>

                    {day.breaks.map((breakItem, breakIndex) => {
                      const breakError = dayErrors?.breaks?.[breakIndex];
                      const hasError = breakError && (breakError.start || breakError.end || breakError.overlap || breakError.withinHours);

                      return (
                        <div
                          key={breakIndex}
                          style={{
                            backgroundColor: hasError ? '#ffebee' : '#f5f5f5',
                            border: '1px solid',
                            borderColor: hasError ? '#d32f2f' : '#ddd',
                            borderRadius: '4px',
                            padding: '12px',
                            marginBottom: '12px',
                          }}
                        >
                          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                                Start
                              </label>
                              <select
                                name={`workDays[${dayIndex}].breaks[${breakIndex}].start`}
                                value={breakItem.start}
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                  width: '100%',
                                  padding: '8px',
                                  border: breakError?.start
                                    ? '2px solid #d32f2f'
                                    : '1px solid #ccc',
                                  borderRadius: '4px',
                                  fontSize: '14px',
                                }}
                              >
                                <option value="">Select start time</option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                                End
                              </label>
                              <select
                                name={`workDays[${dayIndex}].breaks[${breakIndex}].end`}
                                value={breakItem.end}
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                  width: '100%',
                                  padding: '8px',
                                  border: breakError?.end
                                    ? '2px solid #d32f2f'
                                    : '1px solid #ccc',
                                  borderRadius: '4px',
                                  fontSize: '14px',
                                }}
                              >
                                <option value="">Select end time</option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                const newBreaks = [...day.breaks];
                                newBreaks.splice(breakIndex, 1);
                                setFieldValue(`workDays[${dayIndex}].breaks`, newBreaks);
                              }}
                              style={{
                                padding: '8px 12px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                marginTop: '20px',
                              }}
                            >
                              Remove
                            </button>
                          </div>

                          {breakError && (
                            <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '8px' }}>
                              {breakError.start || breakError.end || breakError.overlap || breakError.withinHours}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => {
              formik.resetForm();
            }}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f5f5f5',
              color: '#333',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            Reset
          </button>
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: Object.keys(errors).length === 0 ? '#4caf50' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: Object.keys(errors).length === 0 ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            Save Schedule
          </button>
        </div>
      </form>

      {submittedData && (
        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px', color: '#333' }}>Submitted Data:</h3>
          <pre style={{ 
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '12px',
            color: '#666',
            margin: 0,
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}

      {/* Debug view - shows errors in console and on screen */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>Form errors: {Object.keys(errors).length > 0 ? 'Yes' : 'No'}</p>
        <p>Form is valid: {Object.keys(errors).length === 0 ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default WorkDaysSchedule;