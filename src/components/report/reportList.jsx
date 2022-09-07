import React from 'react'

const ReportList = ({ title, body }) => {
  return (
    <>
      {/* Title */}
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        <div
          className="row d-none d-md-flex col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          {title?.map((d) => (
            <div className={`col-md-${d[0]} col-${d[1]}`}>{d[2]}</div>
          ))}
        </div>
        <hr />
        <div className="row col-md-12">
          {body?.map((e, i) => (
            <div key={i}>
              <div
                className="row col-md-12"
                style={{
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: '100',
                }}
              >
                {title?.map((d) => (
                  <div
                    className={`col-md-${d[0]} col-${d[1]}`}
                    style={
                      d[2] === 'debit' || d[2] === 'credit' || d[2] === 'total'
                        ? { textAlign: 'right' }
                        : { textAlign: 'left' }
                    }
                  >
                    {d[2] === 'debit' || d[2] === 'credit' || d[2] === 'total'
                      ? e[`${d[2]}`]
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                      : e[`${d[2]}`]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ReportList
