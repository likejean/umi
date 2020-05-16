import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

const mapStateToProps = (state: any) => (
  {
    counter: state.Counter.count
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  counterPlus: () => dispatch({ type: 'Counter/plus' }),
  counterMinus: () => dispatch({ type: 'Counter/minus' })
})

export default connect(mapStateToProps, mapDispatchToProps)((props: any) => {
  const plus = () => {
    console.log('PLUS');
    props.counterPlus();
  };

  const minus = () => {
    console.log('MINUS');
    props.counterMinus();
  };

  return (
    <div>
      <Button onClick={plus}>+</Button>
      <h1>Counter: {props.counter}</h1>
      <Button onClick={minus}>-</Button>
      <p>Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever.</p>
    </div>
  );
});

